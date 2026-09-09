import { navLinks, authLinks } from "../../data";
import "../Navbar.css";
import logo from "../assets/KotiSpot_logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">
                <img className="kotispot" src= {logo} alt="Kotispot" />
            </a>

            <ul className="navlinks">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>

            <ul className="authLinks">
                {authLinks.map((link) => (
                    <li key={link.id}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;