import React from "react";
import "../CSS/signup_recruiter.css";

const Signup_Recruiter = () => {
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
  const navigate = useNavigate();

  function handleSubmitRecruiter(e) {
    console.log(formData);
    if (!passwordError) {
      e.preventDefault();
      authService.register(formData).then((user) => {
        console.log(user);
        console.log(user.accessToken);
        if (user.accessToken) {
          navigate("/");
        } else {
          seterrorMsg(user);
        }
      });
    }
  }

  function handleChangeRecruiter(e) {
    if (e.target.name !== "retype") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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

  function Signup_Recruiter() {
    return (
      (
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
                  href="http://rxp6700.uta.cloud/Phase1/HTML/Home.html"
                >
                  <i class="fa fa-home"></i> Home
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  href="http://rxp6700.uta.cloud/Phase1/HTML/About.html"
                >
                  <i class="fa-solid fa-circle-info"></i> About
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  href="http://rxp6700.uta.cloud/Phase1/HTML/contactUS.html"
                >
                  <i class="fa-solid fa-phone"></i> Contact Us
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  href="http://rxp6700.uta.cloud/Phase1/HTML/services.html"
                >
                  <i class="fa-solid fa-gears"></i> Services
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  href="http://rxp6700.uta.cloud/Phase1/HTML/SignIn.html"
                >
                  <i class="fa fa-sign-in"></i> Sign In
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Candidate.html"
                >
                  <i class="fa-regular fa-user"></i> Register
                </a>
              </li>
            </ul>
          </nav>
        </header>
      ),
      (
        <main>
          <section id="signup">
            <div class="signup-container">
              <h2>Recruiter Registration</h2>
              <div class="role-dropdown">
                <label for="role">Select Role:</label>
                <div class="role-buttons">
                  <a href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Candidate.html">
                    URM Applicant
                  </a>
                  <a href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Academia.html">
                    Academia
                  </a>
                  <a href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Recruiter.html">
                    Recruiter
                  </a>
                  <a href="http://rxp6700.uta.cloud/Phase1/HTML/Signup_Recruiter.html">
                    Recruiter Officer
                  </a>
                </div>
              </div>
              {errorMsg ? <p>{"" + errorMsg}</p> : <></>}
              <form
                onSubmit={(e) => andleSubmitRecruiter(e)}
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
                    <input id="phone" name="phone" required="" type="tel" />
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
                  <label>Gender:</label>
                  <div class="radio-group">
                    <label>
                      <input name="gender" type="radio" value="male" /> Male
                    </label>
                    <label>
                      <input name="gender" type="radio" value="female" /> Female
                    </label>
                    <label>
                      <input name="gender" type="radio" value="other" /> Other
                    </label>
                  </div>
                  <div class="input-container">
                    <label for="dob">Date of Birth:</label>
                    <input id="dob" name="dob" required="" type="date" />
                  </div>
                  <div class="input-container">
                    <label for="email">Email:</label>
                    <input id="email" name="email" required="" type="email" />
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
                    <label for="confirmPassword">Confirm Password:</label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      required=""
                      type="password"
                    />
                  </div>
                  <div class="input-container">
                    <label for="profilePicture">Profile Picture:</label>
                    <input
                      accept="image/*"
                      id="profilePicture"
                      name="profilePicture"
                      type="file"
                    />
                  </div>
                </div>
                {/* <!-- Agency Info --> */}
                <div class="section">
                  <h3>Agency Info</h3>
                  <div class="input-container">
                    <label for="agencyName">Agency Name:</label>
                    <input
                      id="agencyName"
                      name="agencyName"
                      required=""
                      type="text"
                    />
                  </div>
                  <div class="input-container">
                    <label for="agencyCode">Agency Code:</label>
                    <input
                      id="agencyCode"
                      name="agencyCode"
                      required=""
                      type="text"
                    />
                  </div>
                  <div class="input-container">
                    <label for="agencyAddress">Agency Address:</label>
                    <input
                      id="agencyAddress"
                      name="agencyAddress"
                      required=""
                      type="text"
                    />
                  </div>
                  <div class="input-container">
                    <label for="position">Position:</label>
                    <input
                      id="position"
                      name="position"
                      required=""
                      type="text"
                    />
                  </div>
                </div>
                <button class="submit-button" type="submit">
                  Submit
                </button>
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
      )
    );
  }
};

export default Signup_Recruiter;
