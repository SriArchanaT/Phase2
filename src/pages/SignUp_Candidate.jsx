import React, { useState } from "react";
import "../CSS/signup_candidate.css";

const Signup_Candidate = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        password: "",
        role: "",
        date_of_birth: "",
        profile_picture: "",
        institution_name: "",
        position: "",
        phone: "",
        address: "",
    });

    const [passwordError, setPasswordError] = useState("");

    const [errorMsg, seterrorMsg] = useState(false);

    function handleSubmitCandidate(e) {
        console.log(formData);
        if (!passwordError) {
            e.preventDefault();
            
        }
    }

    function handleChangeCandidate(e) {
        if (e.target.name !== "retype") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
        if (e.target.name === "password") {
            if (e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters long");
            } else if (!/\d/.test(e.target.value)) {
                setPasswordError("Password must contain at least one digit");
            } else if (!/[a-zA-Z]/.test(e.target.value)) {
                setPasswordError("Password must contain at least one letter");
            } else if (
                !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value)
            ) {
                setPasswordError(
                    "Password must contain at least one special character"
                );
            } else {
                setPasswordError("");
            }
        }
        if (e.target.name === "retype") {
            if (e.target.value !== formData.password) {
                setPasswordError("passwords do not match");
            } else {
                setPasswordError("");
            }
        }
    }

    return (
        <main>
            <section id="signup">
                <div class="signup-container">
                    <h2>Sign Up as URM Applicant</h2>
                    <div class="role-dropdown">
                        <label for="role">Select Role:</label>
                        <div class="role-buttons">
                            <a href="signup_candidate">
                                URM Applicant
                            </a>
                            <a href="singup_academia">
                                Academia
                            </a>
                            <a href="signup_recruiter">
                                Recruiter
                            </a>
                            <a href="signup_dei">
                                DEI Officer
                            </a>
                        </div>
                    </div>
                    {errorMsg ? <p>{"" + errorMsg}</p> : <></>}
                    <form
                        onSubmit={(e) => handleSubmitCandidate(e)}
                        enctype="multipart/form-data"
                        method="POST"
                    >
                        {/* <!-- Profile Info --> */}
                        <div class="section">
                            <h3>Profile Info</h3>
                            <div class="input-container">
                                <label for="firstName">First Name:</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="lastName">Last Name:</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="phone">Phone Number:</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    required=""
                                    type="tel"
                                />
                            </div>
                            <div class="input-container">
                                <label for="address">Address:</label>
                                <input
                                    id="address"
                                    name="address"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="dob">Date of Birth:</label>
                                <input
                                    id="dob"
                                    name="dob"
                                    required=""
                                    type="date"
                                />
                            </div>
                            <div class="input-container">
                                <label for="email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    required=""
                                    type="email"
                                />
                            </div>
                            <div class="input-container">
                                <label for="password">Password:</label>
                                <input
                                    id="password"
                                    name="password"
                                    required=""
                                    type="password"
                                />
                            </div>
                            <div class="input-container">
                                <label for="confirmPassword">
                                    Confirm Password:
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required=""
                                    type="password"
                                />
                            </div>
                            <div class="input-container">
                                <label for="profilePicture">
                                    Profile Picture:
                                </label>
                                <input
                                    accept="image/*"
                                    id="profilePicture"
                                    name="profilePicture"
                                    type="file"
                                />
                            </div>
                        </div>
                        {/* <!-- Educational Info --> */}
                        <div class="section">
                            <h3>Educational Info</h3>
                            <div class="input-container">
                                <label for="institution">Institution:</label>
                                <input
                                    id="institution"
                                    name="institution"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="education">Education:</label>
                                <input
                                    id="education"
                                    name="education"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="researchField">
                                    Research Field:
                                </label>
                                <input
                                    id="researchField"
                                    name="researchField"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="experience">Experience:</label>
                                <input
                                    id="experience"
                                    name="experience"
                                    required=""
                                    type="text"
                                />
                            </div>
                        </div>
                        {/* <!-- Demographic Info --> */}
                        <div class="section">
                            <h3>Demographic Info</h3>
                            <div class="input-container">
                                <label for="race">Race:</label>
                                <input
                                    id="race"
                                    name="race"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="ethnicity">Ethnicity:</label>
                                <input
                                    id="ethnicity"
                                    name="ethnicity"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="maritalStatus">
                                    Marital Status:
                                </label>
                                <input
                                    id="maritalStatus"
                                    name="maritalStatus"
                                    required=""
                                    type="text"
                                />
                            </div>
                            <div class="input-container">
                                <label for="gender">Gender:</label>
                                <input
                                    id="gender"
                                    name="gender"
                                    required=""
                                    type="text"
                                />
                            </div>
                        </div>
                        {/* <!-- Files Section --> */}
                        <div class="section">
                            <h3>Files Section</h3>
                            <div class="input-container">
                                <label for="resume">Upload Resume:</label>
                                <input
                                    accept=".pdf,.doc,.docx"
                                    id="resume"
                                    name="resume"
                                    required=""
                                    type="file"
                                />
                            </div>
                            <div class="input-container">
                                <label for="coverLetter">
                                    Upload Cover Letter:
                                </label>
                                <input
                                    accept=".pdf,.doc,.docx"
                                    id="coverLetter"
                                    name="coverLetter"
                                    required=""
                                    type="file"
                                />
                            </div>
                            <div class="input-container">
                                <label for="personalStatement">
                                    Personal Statement:
                                </label>
                                <textarea
                                    id="personalStatement"
                                    name="personalStatement"
                                    required=""
                                    rows="5"
                                ></textarea>
                            </div>
                            <button class="submit-btn" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                    <p>
                        Already have an account?{" "}
                        <a href="/Users/sriarchanataduri/Desktop/WDM/HTML/SignIn.html">
                            Log In
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Signup_Candidate;
