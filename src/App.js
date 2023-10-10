import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import History from "./Components/History";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import View from "./Components/View.js";

const App = () => {
    const [find, setFind] = useState(null);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="home" element={<Home />} />
                    <Route
                        path="history"
                        element={<History setFind={setFind} />}
                    />
                    <Route path="view" element={<View find={find} />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
