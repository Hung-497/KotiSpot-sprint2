import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <p>We're here to help. Send us a message and we'll get back to you.</p>
            <form className="contact-us-form">
                <h4 className = "contact-us-message">Send us a message</h4>
                <div>
                    <label type="text">Full name*</label>
                    <input value = {fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="eg. John Doe" />
                </div>
                <div>
                    <label type="email">Email*</label>
                    <input type="email" placeholder="eg. john.doe@gmail.com" />
                </div>
                <div>
                    <label type="text">Subject*</label>
                    <select>
                        <option>Buy a property</option>
                        <option>Rent a property</option>
                        <option>Sell a property</option>
                        <option>Property viewing</option>
                        <option>Pricing/Property valuation</option>
                        <option>Payment/Transaction support</option>
                        <option>Report a property or a listing</option>
                        <option>Agent/Seller inquiry</option>
                        <option>Other/General inquiry</option>
                    </select>
                </div>
                <div>
                    <label type="text">Message*</label>
                    <textarea placeholder="Type your message here"></textarea>
                </div>
                <Link className="submit-button" to="/contactthankmessage">Submit</Link>
                <h4 className="contact-us-other">Other ways to reach us</h4>
                    <div>Email: support@example.com</div>
                    <div>Phone: +358 4433224</div>
                    <div>Support hours: Mon-Fri, 9.00-17:00 </div>
                <h4>FAQ</h4>
                <div>Visit our Help Center for answers to common questions.</div>
            </form>
        </div>

    );
};

export default Contact;