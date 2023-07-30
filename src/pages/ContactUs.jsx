import React from "react";
import "../CSS/contactUS.css";


const ContactUS = () => {
    return (
        <main>
            <section id="contact">
                <div class="hero">
                    <h1>Contact URM Application</h1>
                    <p>
                        Have questions or inquiries? Contact us using the
                        information below:
                    </p>
                    <div class="flash-cards">
                        <div class="flash-card">
                            <h3>Email</h3>
                            <p>info@urmapplication.com</p>
                        </div>
                        <div class="flash-card">
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div class="flash-card">
                            <h3>Address</h3>
                            <p>123 Main Street, City, State, Zip</p>
                        </div>
                    </div>
                    <div class="contact-form">
                        <h2>Send us a message</h2>
                        <form action="#" method="post">
                            <input
                                name="firstName"
                                placeholder="First Name"
                                required=""
                                type="text"
                            />
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                required=""
                                type="text"
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                required=""
                                type="email"
                            />
                            <textarea
                                name="message"
                                placeholder="Send a message"
                                required=""
                            ></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUS;
