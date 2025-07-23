import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Dental Appointment
        </Link>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        {user ? (
          <>
            <Link to="/appointments">My Appointments</Link>
            <Link to="/appointments/new">New Appointment</Link>
            <Link to="/profile">My Profile</Link>
            <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
