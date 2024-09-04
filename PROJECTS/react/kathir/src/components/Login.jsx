import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle the login form

  const validateForm = () => {
    const newErrors = {};
    if (!Email) {
      newErrors.Email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      newErrors.Email = "Email is invalid!";
    }

    if (!Password) {
      newErrors.Password = "Password is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        Email,
        Password,
      });

      if (response.status === 200) {
        localStorage.setItem("isAuth", response.data.token);
        window.location.href = "/";
      }
    } catch (err) {
      if (err.response) {
        setErrors({
          Email:
            err.response.data.message === "User not found"
              ? "User not found"
              : "",
          Password:
            err.response.data.message === "Password is incorrect"
              ? "Password is incorrect"
              : "",
        });
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div className="landing-page">
        <header>
          <h1>Welcome to Data Management of Organization</h1>
        </header>

        <section className="about-organization">
          <h2>About Us</h2>
          <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quis omnis 
            incidunt voluptatem repudiandae, rem sed cupiditate ipsa explicabo. Sint, similique aperiam
             non autem voluptatem repellat sequi animi, consectetur enim excepturi adipisci eaque? Consequuntur
             libero voluptas vero accusamus nisi omnis facere harum, pariatur quos deleniti, maxime quasi? Dolor, nemo magni!</p>
      
          <div className="images">
            <img
              src="https://via.placeholder.com/400x300?text=Organization+1"
              alt="Organization Image 1"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Organization+2"
              alt="Organization Image 2"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Organization+3"
              alt="Organization Image 3"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Organization+4"
              alt="Organization Image 4"
            />
          </div>
        </section>

        <section className="about-founders">
          <h2>Our Founders</h2>
          <div className="images">
            <img
              src="https://via.placeholder.com/400x300?text=Founder+1"
              alt="Founder Image 1"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Founder+2"
              alt="Founder Image 2"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Founder+3"
              alt="Founder Image 3"
            />
          </div>
        </section>

        <section className="about-services">
          <h2>Our Services</h2>
          <div className="images">
            <img
              src="https://via.placeholder.com/400x300?text=Service+1"
              alt="Service Image 1"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Service+2"
              alt="Service Image 2"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Service+3"
              alt="Service Image 3"
            />
            <img
              src="https://via.placeholder.com/400x300?text=Service+4"
              alt="Service Image 4"
            />
          </div>
        </section>
      </div>

      <div className="body">
        <div className="login-button-container">
          <button
            className="login-toggle-button"
            onClick={() => setShowLoginForm(true)}
          >
            Login
          </button>
        </div>
        {showLoginForm && (
          <div className="login-form-container">
            <button
              className="close-button"
              onClick={() => setShowLoginForm(false)}
            >
              ×
            </button>
            <form onSubmit={handleSubmit}>
              <h1 className="Login">Login</h1>
              <div className="login">
                <label>E-mail:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  name="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.Email && <p className="error">{errors.Email}</p>}

                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  name="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.Password && <p className="error">{errors.Password}</p>}
              </div>
              <button type="submit" className="LoginButton">
                Login
              </button>
            </form>
            <a href="#">Forget password?</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
