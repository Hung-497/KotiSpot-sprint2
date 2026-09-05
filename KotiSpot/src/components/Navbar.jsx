import { navLinks, authLinks } from "../../data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">
                <img className="kotispot" src= {null} alt="Kotispot" />
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