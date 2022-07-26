import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/slices/users/usersSlices";
import icon from '../../../img/result.svg';
import './PrivateNavbar.css';


const PrivateNavbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg text-center" style={{background:'lightyellow'}}>
        <div class="container-fluid">

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
              <li class="nav-item">
                <Link to="/expenses" className="nav-link active">
                  Expenses List
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/incomes" className="nav-link active">
                  Income List
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link to="/dashboard" className="btn  btn-outline-warning me-2">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile" className="btn  btn-outline-primary me-2">
                  Profile
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <Link to="/add-expense" className="btn btn-danger me-2">
                New Expense
              </Link>
              <Link to="/add-income" className="btn btn-success me-2">
                New Income
              </Link>
              <button
                onClick={() => dispatch(logoutAction())}
                className="btn btn-warning me-2"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav> */}

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
      <Link to="/incomes" class="nav-link active" style={{ textDecoration: 'none', color: 'inherit' }} aria-current="page">
        Income List
      </Link>
    </li>

    <li class="nav-item lists">
      <Link
        to="/expenses"
        class="nav-link active"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Expense List
      </Link>
    </li>
    <li class="nav-item lists">
      <Link
        to="/profile"
        class="nav-link active"
        style={{ textDecoration: 'none', color: 'inherit' }}

      >
        Profile
      </Link>
    </li>
    <li class="nav-item mt-2" style={{marginLeft:'100px'}}>
      <form class="d-flex">
        <Link to="/add-income" class="btn btn-outline-success navbutton" style={{ textDecoration: 'none', color: 'inherit',marginLeft:'50px'}}
        >
          New Income
        </Link>
        <Link to="/add-expense" class="btn btn-outline-success navbutton" style={{ textDecoration: 'none', color: 'inherit',marginLeft:'30px' }}
        >
          New Expense
        </Link>
        <button
                onClick={() => dispatch(logoutAction())}
                className="btn btn-outline-success me-2 navbutton"
                style={{ textDecoration: 'none', color: 'inherit',marginLeft:'30px' }}
              >
                Logout
              </button>
      </form>
    </li>
  </ul>

</div>

</nav>
    </>
  );
};

export default PrivateNavbar;
