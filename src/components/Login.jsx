import React from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import img1 from "../assets/8.jpg";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  return (
    <div className="login-background" style={{ backgroundImage: `url(${img1})` }}>
      <div className="login-container">
        <h1>Trippy</h1>
        <h2>Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
