import { User } from "../types/user.types"

type Props = {
    users: User[],
    handleDelete: (id: string) => void,
    handleEdit: (id: string) => void,
    handleView: (id: string) => void,
}
const UserList = ({users, handleDelete, handleEdit, handleView}: Props) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.id} - {user.fullname}
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                        <button onClick={() => handleView(user.id)}>View</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList