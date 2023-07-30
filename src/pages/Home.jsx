import React from "react";

import "../CSS/home.css";

function Home() {
    return (
        <>  
            <main>
                <section id="home">
                    <div class="hero">
                        <h1>Welcome to URM Application</h1>
                        <p>
                            A Dedicated Platform empowering underrepresented
                            minority(URM) individuals! Unlock boundless
                            opportunities for academic growth, scholarships,
                            research positions, and more. Join our vibrant
                            community today and connect with academia,
                            recruiters, and DEI officers who value and support
                            diversity and inclusion.
                        </p>
                        <div>
                            <p>
                                Sign Up now to access a curated list of
                                URM-specific opportunities tailored to your
                                unique journey. Let's pave the way for a
                                brighter future together
                            </p>
                            <a
                                class="cta"
                                href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Candidate.html"
                            >
                                Sign Up Now
                            </a>
                        </div>
                    </div>
                </section>
                {/* <!-- Feedback and Review Section --> */}
                <section class="feedback-review-section">
                    <h2>Feedback and Review</h2>
                    <p>
                        Share your experience with us! We would love to hear
                        your feedback and review about URM Application.
                    </p>
                    {/* <!-- Dummy Reviews --> */}
                    <ul class="feedback-review-list">
                        <li>
                            <strong>John Doe</strong>
                            <p>
                                "Great platform for URM individuals. Found
                                relevant opportunities easily!"
                            </p>
                        </li>
                        <li>
                            <strong>Jane Smith</strong>
                            <p>
                                "URM Application made my job search so much
                                easier. Highly recommended!"
                            </p>
                        </li>
                    </ul>
                    {/* <!-- Review Form --> */}
                    <div class="review-form">
                        <h3>Add Your Review</h3>
                        <form>
                            <label for="name">Name:</label>
                            <input
                                id="name"
                                name="name"
                                required=""
                                type="text"
                            />
                            <label for="review">Review:</label>
                            <textarea
                                id="review"
                                name="review"
                                required=""
                                rows="4"
                            ></textarea>
                            <button type="submit">Submit Review</button>
                        </form>
                    </div>
                </section>
            </main>  
        </>
    );
}
export default Home;
