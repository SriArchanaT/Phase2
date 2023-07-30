import React from "react";

import "../CSS/about.css";

function About() {
    return (
        <main>
            <section id="about">
                <div class="hero">
                    <h1>About URM Application</h1>
                    <p>
                        The URM Application is a dedicated platform that enables
                        persons from underrepresented minorities (URM). Our
                        objective is to provide limitless options for academic
                        advancement, scholarships, research employment, and
                        other opportunities. We want to build a thriving
                        ecosystem in which academia, recruiters, and DEI
                        officials appreciate and encourage diversity and
                        inclusion.
                    </p>
                    <p>
                        We have successfully connected brilliant URM candidates
                        with institutions and organizations devoted to
                        developing diversity and equitable opportunity for over
                        5 decades.
                    </p>
                    <h2>Our Achievements!</h2>
                    <div class="flash-cards">
                        <div class="flash-card">
                            <h3>No. of Applicants Placed in 2023</h3>
                            <p>5000+</p>
                        </div>
                        <div class="flash-card">
                            <h3>No. of Reviews on Profiles</h3>
                            <p>10000+</p>
                        </div>
                        <div class="flash-card">
                            <h3>5 Decades of Success</h3>
                            <p>Since 1973</p>
                        </div>
                    </div>
                    <p>
                        With a strong track record and a dedicated team, we
                        continue to make a positive impact in the lives of
                        countless URM individuals.
                    </p>
                </div>
            </section>
        </main>
    );
}
export default About;
