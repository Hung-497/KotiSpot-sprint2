import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/KotiSpot_Logo.png";

const Register = ({ onRegister }) => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();
        onRegister();
        navigate("/");
    };

    return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f9f8] px-4">
      <div className="w-full max-w-107.5 rounded-xl bg-white px-10 py-12 shadow-sm">

        <div className="mb-8 flex justify-center">
          <img src={logo} alt="KotiSpot" className="w-45 h-auto"/>
        </div>

        <div className="mb-7 text-center">
          <h1 className="text-2xl font-semibold text-[#08243f]">
            Sign up to get started
          </h1>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#08243f]">
              Full name
            </label>

            <input id="name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1f7356] focus:ring-1 focus:ring-[#1f7356]"/>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#08243f]">
              Email
            </label>

            <input id="email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1f7356] focus:ring-1 focus:ring-[#1f7356]"/>
          </div>

          <button type="submit" className="w-full rounded-lg bg-[#1f7356] py-3 font-medium text-white transition hover:bg-[#165942]">
            Continue
          </button>

        </form>

        <div className="mt-7 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-[#1f7356] hover:underline">
              Log in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;