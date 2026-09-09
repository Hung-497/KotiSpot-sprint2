import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Footer from "../src/components/Footer"
import Navbar from "../src/components/Navbar";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import ContactThankMessage from "./pages/ContactThankMessage";
import PropertyInfo from "./pages/PropertyInfo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import { useState } from "react";

function App() {
    const [favorites, setFavorites] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => {
        setIsLoggedIn(true);
    };

    const logOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <BrowserRouter>
                <Navbar isLoggedIn={isLoggedIn} onLogout={logOut} />
                <Routes>
                    <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/results" element={<Results favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/buy" element={<Buy favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/propertyInfo" element={<PropertyInfo favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/contackthankmessage" element={<ContactThankMessage />}
                    />
                    <Route path="/contact" element={<Contact />}
                    />
                    <Route path="/login" element={<Login onLogin={logIn} />}
                    />
                    <Route path="/register" element={<Register onRegister={logIn} />}
                    />
                    <Route path="/rent" element={<Rent favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/sell" element={<Sell />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;