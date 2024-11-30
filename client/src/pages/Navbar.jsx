import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand">
           BloodLink
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/register" className="nav-link">
                Register
              </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
