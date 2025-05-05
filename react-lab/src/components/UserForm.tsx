import { ChangeEvent, FormEvent } from "react";
// import { v4 as uuidv4 } from 'uuid'
import { User } from "../types/user.types";

type Props = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    handleClear: () => void,
    formData: Omit<User, 'id'>,
}

const UserForm = ({ handleSubmit, handleChange, handleClear, formData}: Props) => {
    
    return (
        <div>
            <h2>User Form</h2>
            <form style={{
                display: "flex",
                flexDirection: "column"
            }} onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" value={formData.fullname} placeholder="Full name" onChange={handleChange} id="fullname"/>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} id="age"/>
                <label htmlFor="education">Education</label>
                <select name="education" value={formData.education} onChange={handleChange} id="education">
                    <option value="">Select education</option>
                    <option value="High School">High school</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Diploma">Diploma</option>
                </select>
                <h4>Gender</h4>
                <label htmlFor="gender">Female</label>
                <input type="radio" name="gender" value='Female' onChange={handleChange} checked={formData.gender === 'Female'} id="gender"/>
                <label htmlFor="gender">Male</label>
                <input type="radio" name="gender" value='Male' onChange={handleChange} checked={formData.gender === 'Male'} id="gender" />
                <label htmlFor="gender">Other</label>
                <input type="radio" name="gender" value='Other' onChange={handleChange} checked={formData.gender === 'Other'} id="gender" />
                <h4>Skills</h4>
                <label htmlFor="skills">TypeScript</label>
                <input type="checkbox" value={'TypeScript'} checked={formData.skills.includes('TypeScript')} onChange={handleChange} id="skills"/>
                <label htmlFor="skills">React</label>
                <input type="checkbox" value={'React'} checked={formData.skills.includes('React')} onChange={handleChange} id="skills" />
                <label htmlFor="skills">Node</label>
                <input type="checkbox" value={'Node'} checked={formData.skills.includes('Node')} onChange={handleChange} id="skills" />
                <label htmlFor="skills">NoSQL</label>
                <input type="checkbox" value={'NoSQL'} checked={formData.skills.includes('NoSQL')} onChange={handleChange} id="skills" />
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" value={formData.bio} placeholder="Enter your bio..." onChange={handleChange} id="bio"></textarea>
                <div>
                    <button>Save</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </form>
            <div>
                <p>Hello {formData.fullname}. You are {formData.gender} and {formData.age} with {formData.education}. Your skills are: {formData.skills.join(', ')} and here's your bio: <br />{formData.bio}</p>
            </div>
        </div>
    )
}

export default UserForm