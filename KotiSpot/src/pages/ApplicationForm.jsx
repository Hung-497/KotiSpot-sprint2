import { useState } from "react"
import { Link } from "react-router-dom"

const ApplicationForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [role, setRole] = useState("")
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [about, setAbout] = useState("");

    const handleFullName = (event) => {
        setFullName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const handleRole = (event) => {
        setRole(event.target.value)
    }

    return (
        <form>
            <h1>Application form</h1>
            <h3>Personnal information</h3>
            <div>
                <label type="text">Full name:</label>
                <input type="text" value={fullName} placeholder="Enter your full name" onChange={handleFullName}></input>
            </div>
            <div>
                <label type="text">Email:</label>
                <input type="text" value={email} placeholder="Enter your email" onChange={handleEmail}></input>
            </div>
            <div>
                <label type="text">Phone number:</label>
                <input type="text" value={phoneNumber} placeholder="Enter your phone number" onChange={handlePhoneNumber}></input>
            </div>
            <div>
                <h3>What type of account are you applying for?</h3>
                <label>Seller</label>
                <input type="radio"
                    value="seller"
                    checked={role === "seller"}
                    onChange={handleRole}>
                </input>
            </div>
            <div>
                <label>Real-estate agent</label>
                <input type="radio"
                    value="agent"
                    checked={role === "agent"}
                    onChange={handleRole}>
                </input>
            </div>
            {role === "seller" && (
                <div>
                    <label>Government ID:</label>
                    <input
                        type="file"
                        accept="image/*"
                    />
                    <Link to="/applicationthankmessage">Submit</Link>
                </div>

            )}

            {role === "agent" && (
                <div>
                    <div>
                        <label>Company name (optional):</label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(event) => setCompanyName(event.target.value)}
                            placeholder="Enter company name"
                        />
                    </div>
                    <div>
                        <label>Where do you operate?</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            placeholder="e.g. Helsinki, Espoo"
                        />
                    </div>
                    <div>
                        <label>Real estate licence number (if applicable):</label>
                        <input
                            type="text"
                            value={licenseNumber}
                            onChange={(event) => setLicenseNumber(event.target.value)}
                            placeholder="Enter licence number"
                        />
                    </div>
                    <div>
                        <label>Tell us about yourself:</label>
                        <textarea
                            value={about}
                            onChange={(event) => setAbout(event.target.value)}
                            placeholder="Tell us about your experience..."
                        />
                    </div>
                    <div>Verification:</div>
                    <div>
                        <label>Government ID:</label>
                        <input
                            type="file"
                            accept="image/*"
                        />
                    </div>
                    <div>
                        <label>Real estate licence:</label>
                        <input
                            type="file"
                            accept="image/*"
                        />
                    </div>
                    <Link to="/applicationthankmessage">Submit</Link>
                </div>
            )}
        </form>
    )
}
export default ApplicationForm