import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Footer from "../src/components/Footer"
import Navbar from "../src/components/Navbar";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import { useState } from "react";

function App() {
    const [favorites, setFavorites] = useState([]);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/results" element={<Results favorites={favorites} setFavorites={setFavorites} />}
                    />
                    <Route path="/buy" element={<Buy />}
                    />
                    <Route path="/contact" element={<Contact />}
                    />
                    <Route path="/login" element={<Login />}
                    />
                    <Route path="/register" element={<Register />}
                    />
                    <Route path="/rent" element={<Rent />}
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