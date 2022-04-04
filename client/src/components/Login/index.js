import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
		<div className='login_container'>

<h1 className="login-title">Log In</h1>
        <h3 className="login-text">Login to Your Account</h3>

			
					<form className="login_form"  onSubmit={handleSubmit}>

						<label className="login-form-label">email</label>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="login_form_input"
						/>
						<label className="login-form-label">Password</label>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="login_form_input"
						/>


						{error && <div className="error_msg">{error}</div>}
						
						<button type="submit" className="login_form_button">
            login
          </button>

					</form>


					<p>
          By clicking the Sign Up button,you agree to our <br />
          <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        </p>

      </div>


				<div className="login_footer">
					<p className="para-2">
					{" "}
					Create an account.
					<Link to="/signup">
									<button type="button"  className="signup_button">
										Sing Up
									</button>
								</Link>
					</p>
					</div>
    </div>


	);
};

export default Login;