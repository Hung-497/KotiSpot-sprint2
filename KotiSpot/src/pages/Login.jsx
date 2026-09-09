import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin();
        navigate("/");
    };

    return (
        <div>
            <h1>Login</h1>
            <p>Properties for sale</p>
            <button type="button" onClick={handleLogin}>Log in</button>
        </div>
    );
};

export default Login;