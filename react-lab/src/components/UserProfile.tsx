import { User } from "../types/user.types"

type Props = {
    selectedUser: User | undefined, 
}

const UserProfile = ({ selectedUser }: Props) => {
    return (
        <div>
            <h2>User Profile</h2>
            {selectedUser && 
            <ul>
                <li>ID: {selectedUser.id}</li>
                <li>Full name: {selectedUser.fullname}</li>
                <li>Age: {selectedUser.age}</li>
                <li>Education: {selectedUser.education}</li>
                <li>Gender: {selectedUser.gender}</li>
                <li>Skills: {selectedUser.skills}</li>
                <li>Bio: {selectedUser.bio}</li>
            </ul>
            }
        </div>
    )
}

export default UserProfile