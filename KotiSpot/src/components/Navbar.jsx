import { navLinks, authLinks } from "../../data";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to ="/" className="logo">
                <img className="kotispot" src= {null} alt="Kotispot" />
            </Link>

            <ul className="navlinks">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link to={link.href}>{link.text}</Link>
                    </li>
                ))}
            </ul>

            <ul className="authLinks">
                {authLinks.map((link) => (
                    <li key={link.id}>
                        <Link to={link.href}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;