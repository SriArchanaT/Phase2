import React from "react";

const Header = () => {
    return (
        <header>
            <div class="logo">
                <img
                    alt="Company Logo"
                    src="http://rxp6700.uta.cloud/Phase1/images/Logo.png"
                />
            </div>
            <nav>
                <ul>
                    <li>
                        <a
                            class="btn"
                            href="http://localhost:3000/"
                        >
                            <i class="fa fa-home"></i> Home
                        </a>
                    </li>
                    <li>
                        <a
                            class="btn"
                            href="About"
                        >
                            <i class="fa-solid fa-circle-info"></i> About
                        </a>
                    </li>
                    <li>
                        <a
                            class="btn"
                            href="contactus"
                        >
                            <i class="fa-solid fa-phone"></i> Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            class="btn"
                            href="services"
                        >
                            <i class="fa-solid fa-gears"></i> Services
                        </a>
                    </li>
                    <li>
                        <a
                            class="btn"
                            href="signin"
                        >
                            <i class="fa fa-sign-in"></i> Sign In
                        </a>
                    </li>
                    <li>
                        <a
                            class="btn"
                            href="signup_candidate"
                        >
                            <i class="fa-regular fa-user"></i> Register
                        </a>
                    </li>
                    <li>
                        <a
                            class="btn"
                            href="https://kxr5318.uta.cloud/blog/"
                        >
                            <i class="fa-brands fa-blogger"></i> Blog
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
