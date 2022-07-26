import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrencyFormatter from "../../../hooks/useCurrencyFormatter";
import inc from '../../../img/inc.png';

const UserProfileStats = ({
  avgExp,
  totalExp,
  minExp,
  maxExp,
  numOfTransExp,
  avgInc,
  totalInc,
  minInc,
  maxInc,
  numOfTransInc,
}) => {
  //format curr
  const formattedAmt = useCurrencyFormatter("USD", totalExp);
  const formattedAmtInc = useCurrencyFormatter("USD", totalInc);
  //format date

  return (
    <section class="py-6">
      <div class="container">
        <div class="row">
        <div class="col-12 col-md-6 mb-6">
          <div className="row" style={{color:'black', border:'1px solid rgba(54, 162, 235, 1)', backgroundColor:'rgba(54, 162, 235, 0.2)', height:'300px'}}>
            <div className="col-4 justify-content-center mt-5">
              <img
                            className="img-fluid me-4 rounded-2"
                            style={{ width: '170px', height: '170px', marginLeft: '13%' }}
                            src={inc}
                            alt=""
                          />             
            </div>
            <div className="col-8">
            <div class="p-8 rounded-2" >
              <div class="d-flex mb-6 align-items-start"  style={{marginLeft:'10%'}}>
                <span
                  class="d-inline-flex align-items-center justify-content-center bg-danger-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>

                 <span className="badge bg-light fs-2  mt-4 mb-2" style={{color:'rgba(54, 162, 235)', border:'1px solid rgba(54, 162, 235, 1)',marginRight:'40%'}}>Expenses</span>

              </div>
              <h1 class="mb-4"  style={{marginLeft:'18%'}}>{formattedAmt}</h1>
              <div style={{marginLeft:'18%'}}>
              <p class="mb-0 fw-bold">
                <span>Number of Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{numOfTransExp}</span>
                </span>
              </p>

              <p class="mb-0 fw-bold">
                <span>Minimum Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{minExp}</span>
                </span>
              </p>

              <p class="mb-0 fw-bold">
                <span>Maximum Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{maxExp}</span>
                </span>
              </p>

              <p class="mb-3 fw-bold">
                <span>Average Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{avgExp}</span>
                </span>
              </p>
              </div>
            </div>
            </div>
            </div>
          </div> 

          
         <div class="col-12 col-md-6 mb-6">
          <div className="row" style={{color:'black', border:'1px solid rgba(54, 162, 235, 1)', backgroundColor:'rgba(54, 162, 235, 0.2)', height:'300px'}}>
            <div className="col-4 justify-content-center mt-5">
              <img
                            className="img-fluid me-4 rounded-2"
                            style={{ width: '170px', height: '170px', marginLeft: '13%' }}
                            src={inc}
                            alt=""
                          />             
            </div>
            <div className="col-8">
            <div class="p-8 rounded-2" >
              <div class="d-flex mb-6 align-items-start"  style={{marginLeft:'10%'}}>
                <span
                  class="d-inline-flex align-items-center justify-content-center bg-danger-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>

                 <span className="badge bg-light fs-2  mt-4 mb-2" style={{color:'rgba(54, 162, 235)', border:'1px solid rgba(54, 162, 235, 1)',marginRight:'40%'}}>Incomes</span>

              </div>
              <h1 class="mb-4"  style={{marginLeft:'18%'}}>{formattedAmtInc}</h1>
              <div style={{marginLeft:'18%'}}>
              <p class="mb-0 fw-bold">
                <span>Number of Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{numOfTransInc}</span>
                </span>
              </p>

              <p class="mb-0 fw-bold">
                <span>Minimum Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{minInc}</span>
                </span>
              </p>

              <p class="mb-0 fw-bold">
                <span>Maximum Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{maxInc}</span>
                </span>
              </p>

              <p class="mb-3 fw-bold">
                <span>Average Transactions: </span>
                <span class="text-danger ms-1">
                  <span>{avgInc}</span>
                </span>
              </p>
              </div>
            </div>
            </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default UserProfileStats;
