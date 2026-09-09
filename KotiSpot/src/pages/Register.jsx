import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
    const navigate = useNavigate();

    const handleRegister = () => {
        onRegister();
        navigate("/");
    };

    return (
        <div>
            <h1>Register</h1>
            <p>Properties for sale</p>
            <button type="button" onClick={handleRegister}>Create account</button>
        </div>
    );
};

export default Register;