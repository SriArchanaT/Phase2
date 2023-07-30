import React from "react";
import '../CSS/SignIn.css';

const Singin = () => {
    return(
        <main>
                <section id="signin">
                    <div class="signin-container">
                        <h2>Sign In to Your Account</h2>
                        <form>
                            <label for="loginID">
                                <i class="fa-solid fa-envelope"></i> Email
                            </label>
                            <input
                                id="loginID"
                                name="loginID"
                                required=""
                                type="email"
                            />
                            <label for="password">
                                <i class="fa-solid fa-lock"></i> Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                required=""
                                type="password"
                            />
                            <button class="signin-btn" type="submit">
                                Sign In
                            </button>
                        </form>
                        <br />
                        <a href="http://rxp6700.uta.cloud/Phase1/HTML/ForgotPassword.html">
                            Forgot Password?
                        </a>
                        <p>
                            Don't have an account?{" "}
                            <a href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Candidate.html">
                                Create
                            </a>
                        </p>
                    </div>
                </section>
            </main>
    )
}

export default Singin;