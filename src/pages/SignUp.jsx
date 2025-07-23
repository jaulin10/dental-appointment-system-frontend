import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/signin");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Something went wrong during sign up";
      setError(msg);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="form-error">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create an Account</button>
        <p className="form-switch">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
}
