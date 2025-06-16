
import "./Signup.css";
import  img2 from "../assets/2.jpg"; 
import { Link } from "react-router-dom";


function Signup() {
  return (
    <div className="signup-background" style={{ backgroundImage: `url(${img2})` }}>
    <div className="signup-container">
        <h1>Trippy</h1>
      <h2>Create an Account</h2>
      <form className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
        <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Signup;
