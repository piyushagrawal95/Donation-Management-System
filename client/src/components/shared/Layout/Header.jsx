import React, { useState, useEffect } from "react";
import { BiDonateBlood, BiUserCircle, BiMoon, BiSun } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"; // Only import toast

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to the body on mount and whenever `darkMode` changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  // Logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully!"); // Toast notification on successful logout
    navigate("/login");
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
            <li className="nav-item mx-3">
              <button
                className={`btn ${darkMode ? "btn-warning" : "btn-outline-light"}`}
                onClick={toggleDarkMode}
              >
                {darkMode ? <BiSun /> : <BiMoon />} {/* Dark/Light mode icon */}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
