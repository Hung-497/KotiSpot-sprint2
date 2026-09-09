import { navLinks, authLinks } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isLoggedIn, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        setIsMenuOpen(false);
        onLogout();
    };

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
                {isLoggedIn ? (
                    <li className="profileMenu">
                        <button
                            className="profileButton"
                            type="button"
                            aria-label="Open profile menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            &#128100;
                        </button>
                        {isMenuOpen && (
                            <div className="profileDropdown">
                                <Link to="/results" onClick={() => setIsMenuOpen(false)}>
                                    Saved properties
                                </Link>
                                <Link to="/sell" onClick={() => setIsMenuOpen(false)}>
                                    My listings
                                </Link>
                                <button type="button" onClick={handleLogout}>
                                    Log out
                                </button>
                            </div>
                        )}
                    </li>
                ) : (
                    authLinks.map((link) => (
                        <li key={link.id}>
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    );
};

export default Navbar;