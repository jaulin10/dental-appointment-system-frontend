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
        padding: "1rem",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/">Appointment Management</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to="/profile">MyProfile</Link>
            <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
              SignOut
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup" style={{ marginLeft: "1rem" }}>
              SignUp
            </Link>
            <Link to="/appointments">Mes Rendez-vous</Link>
            <Link to="/appointments/new">Nouveau Rendez-vous</Link>
          </>
        )}
      </div>
    </nav>
  );
}
