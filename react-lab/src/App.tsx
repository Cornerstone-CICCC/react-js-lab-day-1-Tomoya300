import { ChangeEvent, FormEvent, useState } from "react";
import UserForm from "./components/UserForm"
import { User } from "./types/user.types";
import { v4 as uuidv4 } from "uuid"
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    fullname: '',
    age: 0,
    education: '',
    gender: '',
    skills: [],
    bio: ''
  })
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [updateUserId, setUpdateUserId] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value, type} = e.target
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked
        setFormData(prevState => ({
            ...prevState,
            skills: checked ? [...prevState.skills, value] : prevState.skills.filter(skill => skill !== value)
        }))
    }
    setFormData(prevState => ({
        ...prevState,
        id: uuidv4(),
        [name]: value
    }))
  }
 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (updateUserId) {
      setUsers(prevState => prevState.map(user => user.id === updateUserId ? {...user, ...formData, id: updateUserId} : user))
      setUpdateUserId(null)
    } else {
      setUsers(prevState => ([
        ...prevState,
        {id: uuidv4(), ...formData}
      ]))
    }
    setFormData({
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: ''
    })
  }

  const handleDelete = (id: string) => {
    setUsers(prevState => prevState.map(user => user.id !== id) ? [...prevState] : [...prevState]) 
  }


  const handleClear = () => {
      setFormData({
          fullname: '',
          age: 0,
          education: '',
          gender: '',
          skills: [],
          bio: ''
      })
  }

  const handleEdit = (id: string) => {
    const user = users.find(user => user.id === id)
    if (!user) return 

    const {id: _, ...rest} = user
    setFormData(rest)
    setUpdateUserId(id)
  }

  const handleView = (id: string) => {
    const user = users.find(user => user.id === id)
    if (!user) {
      return 
    } else {
      setSelectedUserId(user.id)
    }

  }

  const selectedUser = users.find(user => user.id === selectedUserId)
  
  return (
    <div>
      <UserForm handleSubmit={handleSubmit} handleChange={handleChange} handleClear={handleClear} formData={formData}/>
      <UserList users={users} handleDelete={handleDelete} handleEdit={handleEdit} handleView={handleView}/>
      <UserProfile selectedUser={selectedUser}/>
    </div>
  )
}

export default App