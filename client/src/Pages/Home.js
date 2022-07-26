import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/data.svg";
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2 d-flex" style={{backgroundImage:'url(https://letsledger.com/wp-content/uploads/FeatureExpensifyAll_Option1_033022.svg)', margin:'0',
    backgroundSize: 'cover',backgroundRepeat:'no-repeat',height:'85vh', marginLeft:'5%'}}>
        <div className="col-12 mt-5 d-flex">
                <div className="mb-5 mt-4">
                  <h1 className="subtext display-4 fw-bold text-center" style={{fontStyle:'italic'}}>
                    <span style={{color:'#13d68f',fontSize:'100px'}}>E</span>XPENSIFY
                  </h1>
                  <h2 className="subtext display-4  mb-5 text-center">
                     "Tracking on the go"
                  </h2>
                  <p className="lead mb-5 text-center" style={{fontWeight:'400'}}>
                    Keep a check on how and what you spend
                  </p>
                  <div className="d-flex flex-wrap justify-content-center">
                    <Link
                      to="/profile"
                      className="btn btn-primary me-4 mb-4 mb-sm-0 align-center text-center fw-bold"
                      style={{backgroundColor:'#13d68f' ,borderRadius: '5px solid #13d68f',color:'black',width:'120px',height:'40px'}}
                    >
                      Dive in!
                    </Link>
                  </div>
                </div>
            </div>
        
        </div>
      </div>
    </>
  );
};


export default Home;
