import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="signup_container">
        <h1 className="signup-title">Sign Up</h1>
        <h4 className="signup-text">User Registration Form</h4>

        <form className="signup_form" onSubmit={handleSubmit}>
          <label className="signup-form-label">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            required
            className="signup_form_input"
          />
          <label className="signup-form-label">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            required
            className="signup_form_input"
          />
          <label className="signup-form-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className="signup_form_input"
          />
          <label className="signup-form-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className="signup_form_input"
          />

          {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="signup_form_button">
            Sing Up
          </button>
        </form>

        <p>
          By clicking the Sign Up button,you agree to our <br />
          <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        </p>
      </div>
      <div className="signup_footer">
        <p className="para-2">
          {" "}
          Already have an account?
          <Link to="/login">
            <button type="button" className="login_button">
              Log In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
