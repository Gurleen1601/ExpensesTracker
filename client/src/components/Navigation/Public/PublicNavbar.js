import React from "react";
import { Link } from "react-router-dom";
import './PublicNavbar.css'
import icon from '../../../img/result.svg';
const PublicNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg text-center" style={{background:'lightyellow'}}>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 nav-fill w-100">
            <li className="nav-item">
              <Link to="/" className="navbar-brand">
                <img src={icon} style={{height:'65px',width:'65px'}}/>
              </Link>
            </li>
            <li class="nav-item lists">
              <Link to="/" class="nav-link active" style={{ textDecoration: 'none', color: 'inherit' }} aria-current="page">
                Home
              </Link>
            </li>

            <li class="nav-item lists">
              <Link
                to="/add-expense"
                class="nav-link active"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                New Expense
              </Link>
            </li>
            <li class="nav-item lists">
              <Link
                to="/add-income"
                class="nav-link active"
                style={{ textDecoration: 'none', color: 'inherit' }}

              >
                New Income
              </Link>
            </li>
            <li class="nav-item mt-2" style={{marginLeft:'100px'}}>
              <form class="d-flex">
                <Link to="/login" class="btn btn-outline-success navbutton" style={{ textDecoration: 'none', color: 'inherit',marginLeft:'50px'}}
                >
                  Sign In
                </Link>
                <Link to="/register" class="btn btn-outline-success navbutton" style={{ textDecoration: 'none', color: 'inherit',marginLeft:'30px' }}
                >
                  Sign Up
                </Link>
              </form>
            </li>
          </ul>

        </div>

      </nav>
    </>
  );
};

export default PublicNavbar;
