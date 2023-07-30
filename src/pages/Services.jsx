import React from "react";
import "../CSS/services.css";

const Services = () => {
    return (
        <main>
            <section id="services">
                <div class="services-container">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="fa-solid fa-database"></i>
                                <h3>
                                    Access to Curated URM Candidate Database
                                </h3>
                            </div>
                            <div class="flip-card-back">
                                <p>
                                    Explore a wide selection of underrepresented
                                    minority candidates tailored to your unique
                                    hiring needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="fa-solid fa-portrait"></i>
                                <h3>Candidate Profiles and Portfolios</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>
                                    Review detailed profiles and portfolios of
                                    URM candidates showcasing their skills,
                                    achievements, and experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services-container">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="fa-solid fa-bookmark"></i>
                                <h3>Bookmark or Save Profiles</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>
                                    Save candidate profiles for future reference
                                    and easily access them during your hiring
                                    process.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <i class="fa-solid fa-filter"></i>
                                <h3>Advanced Filtering and Easy Job Apply</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>
                                    Use advanced filtering options to find the
                                    perfect URM candidates and make the job
                                    application process hassle-free for
                                    students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
