import { useState } from "react"

const Profile = () => {
    const [profilePic, setProfilePic] = useState("../src/assets/default-pfp.png");
    const [firstName, setFirstName] = useState("Someone")
    const [lastName, setLastName] = useState("Something")
    const [email, setEmail] = useState("someone.something@example.com")
    const [postNumber, setPostNumber] = useState("06769")
    const [location, setLocation] = useState("Neptune")
    const [phoneNumber] = useState("+290 3023844")
    const [edit, setEdit] = useState(false)

    const handleProfilePic = (event) => {
            const file = event.target.files[0];

            if (file) {
                setProfilePic(URL.createObjectURL(file));
            }
        };

    return (    
    <div>
        <h1>My profile</h1>
        <div>
            <img src = {profilePic} alt = "pfp"/>
        </div>

        {edit &&( 
        <input type = "file" accept = "image/*" onChange={handleProfilePic}/>)}
        {!edit?(
            <div>
                <p> <strong>First name:</strong> {firstName} </p> 
                <p> <strong>Last name:</strong> {lastName} </p> 
                <p> <strong>Email:</strong> {email} </p> 
                <p> <strong>Postal code:</strong> {postNumber} </p> 
                <p> <strong>Location:</strong> {location} </p> 
                <p> <strong>Phone number:</strong> {phoneNumber} </p> 
                <button onClick={() => setEdit(true)}> Edit info </button>  
            </div>
        ):( <div>
                <h2>Edit your informations</h2>
                    <div>
                        <label type = "text">First name:</label>
                        <input type = "text" value = {firstName} onChange={(event)=>setFirstName(event.target.value)}></input>
                    </div>
                    <div>
                        <label type = "text">Last name:</label>
                        <input type = "text" value = {lastName} onChange={(event)=>setLastName(event.target.value)}></input>
                    </div><div>
                        <label type = "email">Email:</label>
                        <input type = "text" value = {email} onChange={(event)=>setEmail(event.target.value)}></input>
                    </div><div>
                        <label type = "text">Post number:</label>
                        <input type = "text" value = {postNumber} onChange={(event)=>setPostNumber(event.target.value)}></input>
                    </div><div>
                        <label type = "text">Location:</label>
                        <input type = "text" value = {location} onChange={(event)=>setLocation(event.target.value)}></input>
                    </div><div>
                        <label type = "text">Phone number:</label>
                        <input type = "text" value = {phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}></input>
                    </div>
                    <div> 
                        <button onClick={() => setEdit(false)}> Save </button> 
                    </div>
            </div>
    )}
    </div>
    )}
export default Profile