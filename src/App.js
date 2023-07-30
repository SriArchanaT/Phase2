import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUS from "./pages/ContactUs";
import Services from "./pages/Services";
import Singin from "./pages/Signin";
import Signup_Candidate from "./pages/SignUp_Candidate";
import Signup_Academia from "./pages/SignUP_Academia";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contactus" element={<ContactUS />} />
                    <Route path="services" element={<Services />} />
                    <Route path="signin" element={<Singin />} />
                    <Route path="signup_candidate" element={<Signup_Candidate />} />
                    <Route path="signup_academia" element={<Signup_Academia />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
