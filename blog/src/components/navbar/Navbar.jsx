import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser , FaSearch , FaMoon , FaSun } from "react-icons/fa";
import './Navbar.css';
import Home from "../body/home";
export default function Navbar({theme , toggleTheme , changeSearchQuery}) {
  const [showAccount, setShowAccount] = useState(false);
  const [search , setSearch] = useState(false);
  const [searchInput , setSearchInput] = useState("")
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    changeSearchQuery(searchInput);
    setSearchInput("")
  };

  const toggleAccountMenu = () => {
    setShowAccount((prev) => !prev);
  };

  return (
    <>
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} role="navigation">
      <div className="container-fluid">
        <Link to="/" className={`${theme === 'dark' ? 'text-light' : 'text-dark'} navbar-brand`}>Machine Learning</Link>
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
          <div className="navbar-nav ms-auto">
          <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link to="/" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link">Resources</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                <Link to="/create" className="nav-link">New Post</Link>
                </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            {search && (
              <input
                className={`form-control me-2 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            )}
            <button className={`btn ${theme === 'light' ? 'btn-light' : 'btn-dark'}`} type="submit" onClick={() => setSearch(!search)}><FaSearch /></button>
          </form>
            <button
              className={`btn ${theme === 'light' ? 'btn-light' : 'btn-dark'} nav-link d-flex align-items-center`}
              onClick={toggleAccountMenu}
              aria-expanded={showAccount}
              aria-label="Toggle Account Menu"
            >
              <FaUser className="me-1" /> Account
            </button>
            {showAccount && (
              <div className={`dropdown-menu account show ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
                <Link to="/login" className={`dropdown-item ${theme === 'light' ? 'text-dark' : 'text-light bg-dark'}`}>Login</Link>
                <Link to="/register" className={`dropdown-item ${theme === 'light' ? 'text-dark' : 'text-light bg-dark'}` }>Register</Link>
                <Link to="/logout" className={`dropdown-item ${theme === 'light' ? 'text-dark' : 'text-light bg-dark'}`}>Logout</Link>
              </div>
            )}
            <button className={`btn ${theme === 'light' ? 'btn-light' : 'btn-dark'}`} onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>

  );
}
