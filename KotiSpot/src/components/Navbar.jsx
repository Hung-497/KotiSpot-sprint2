import { navLinks, authLinks } from "../../data";
import logo from "../assets/KotiSpot_logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isLoggedIn, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        setIsMenuOpen(false);
        onLogout();
    };

    return (
        <nav className="flex h-20 items-center border-b border-gray-200 bg-white px-8 lg:px-16">
            <Link to ="/" className="flex items-center">
                <img className="w-45 h-auto" src= {logo} alt="Kotispot" />
            </Link>

            <ul className="mx-auto flex items-center gap-9">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link to={link.href} className="text-[15px] font-medium text-[#08243f] transition-colors hover:text-[#1f7356]">{link.text}</Link>
                    </li>
                ))}
            </ul>

            <ul className="flex items-center gap-3">
                {isLoggedIn ? (
                    <li className="relative"> 
                        <button
                            type="button"
                            aria-label="Open profile menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f7356] text-white transition-colors hover:bg-[#165942]"
                        >
                            &#128100;
                        </button>
                        {isMenuOpen && (
                            <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                                <Link to="/results" onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-sm text-[#08243f] transition hover:bg-[#eef6f2] hover:text-[#1f7356]">
                                    Saved properties
                                </Link>
                                <Link to="/sell" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-sm text-[#08243f] transition hover:bg-[#eef6f2] hover:text-[#1f7356]"
                                >
                                    My listings
                                </Link>
                                <button type="button" onClick={handleLogout} className="w-full px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </li>
                ) : (
                    authLinks.map((link, index) => (
                        <li key={link.id}>
                            <Link to={link.href} 
                            className={index === authLinks.length - 1
                            ? "rounded-lg bg-[#1f7356] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#165942]"
                            : "rounded-lg border border-[#1f7356] px-5 py-2.5 text-sm font-medium text-[#1f7356] transition hover:bg-[#eef6f2]" }
                            >{link.text}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    );
};

export default Navbar;