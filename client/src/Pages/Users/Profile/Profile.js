import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userProfileAction } from "../../../redux/slices/users/usersSlices";
import calTransaction from "../../../utils/accStatistics";
import DashboardData from "../../../components/Dashboard/DashboardData";
import navigate from "../../../utils/navigate";
import UserProfileStats from "./UserProfileStats";
import DataGraph from "../../../components/Dashboard/DataGrap";
import useDateFormatter from "../../../hooks/useDateFormatter";
import LoadingComponent from "../../../components/Loading/Loading";
import ErrorDisplayMessage from "../../../components/ErrorDisplayMessage";
import prof from '../../../img/woman.svg';
import './Profile.css';
import pen from '../../../img/pen.svg';

const Profile = () => {
  const [expResult, setExpResult] = useState([]);
  const [incResult, setIncResult] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, []);
  //history
  const history = useHistory();
  const users = useSelector(state => state?.users);
  const { profile, userLoading, userAppErr, userServerErr, userAuth } = users;

  //income
  useEffect(() => {
    if (profile?.expenses) {
      const expenses = calTransaction(profile?.expenses);
      setExpResult(expenses);
    }
    if (profile?.income) {
      const income = calTransaction(profile?.income);
      setIncResult(income);
    }
  }, [profile?.income]);

  // console.log(results);
  // const income = profile?.income;
  // const totalIncome = income
  //   ?.map(inc => inc?.amount)
  //   .reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);

  // //Total Expenses
  // const expenses = profile?.expenses;
  // const totalExp = expenses
  //   ?.map(inc => inc?.amount)
  //   .reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);

  // //Average expenses
  // const averageExp = totalExp / 2;

  // //min Expense

  // const expensesArr = profile?.expenses?.map(exp => exp?.amount);
  // const minExpenses = Math.min(...expensesArr);
  // const maxExpenses = Math.max(...expensesArr);

  // console.log(maxExpenses, totalExp);

  return (
    <>
      {userLoading ? (
        <LoadingComponent />
      ) : userAppErr || userServerErr ? (
        <>
          <ErrorDisplayMessage>
            {userServerErr} {userAppErr}
          </ErrorDisplayMessage>
        </>
      ) : (
        <section className="py-4">
          <div className="container">
            <div className="position-relative p-8 rounded-2">
              <div className="row d-flex mb-6 align-items-center">
                <div className="col-6 d-flex justify-content-center align-items-center" style={{borderRight: '1px solid rgba(19,214,143,}'}}>
                  <div classname="d-flex align-items-center">
                    <div className="card profcard">
                      <h2 className="display-4 fw-normal text-center mb-5" style={{ fontStyle: 'italic' }}>
                      <span style={{
                          color: "rgb(19,214,143)", fontSize: '80px'
                        }}>M</span><span>y  </span>
                        <span style={{
                          color: "rgb(19,214,143)", fontSize: '80px'
                        }}>P</span><span style={{borderBottom: '3px solid rgb(19,214,143)'}}>rofile</span>
                      </h2>
                      <div className="row d-flex align-items-center mycard">
                        <div className="col-5 align-items-center justify-content-center">
                          <img
                            className="img-fluid me-4 rounded-2"
                            style={{ width: '170px', height: '170px', marginLeft: '13%' }}
                            src={prof}
                            alt=""
                          />
                        </div>
                        <div className="col-7 text-center">
                          <h3 className="fw-bold mb-2">
                            <span>
                              {profile?.firstname} {profile?.lastname}
                            </span>
                          </h3 >
                          <h5 className="fw-normal mb-4">
                          <span className="badge" style={{color:'black', border:'1px solid rgba(19,214,143,1)', backgroundColor:'rgba(19,214,143, 0.2)'}}>
                              {profile?.expenses?.length + profile?.income?.length}{" "}
                              Records Created
                            </span>
                          </h5>
                          <h6 className="fw-normal mb-2">{profile?.email}</h6>
                          <h6 className="fw-normal mb-4">Date Joined: 24-June-2022</h6>
                          <button
                            onClick={() => navigate(history, "update-profile", profile)}
                            className="btn fw-bold"
                            style={{color:'black', border:'1px solid rgba(19,214,143,1)', backgroundColor:'rgba(19,214,143, 0.2)'}}
                          >
                            Edit Profile
                            <img src={pen} style={{height:'35px', width:'35px'}}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <DataGraph
                    income={incResult?.sumTotal}
                    expenses={expResult?.sumTotal}
                  />
                </div>
              </div>

              <p className="mb-8"> </p>
              <hr  style={{color:'rgb(19,214,143)' , height:'1px', marginTop:'3%', marginBottom:'3%'}}/>

              <h2 className="display-4 fw-normal text-center mt-5 mb-5" style={{ fontStyle: 'italic' }}>
<span  style={{color:"rgb(19,214,143)", fontSize:'80px'
}}>D</span><span style={{borderBottom: '3px solid rgb(19,214,143)'}}>etails</span>
        </h2>
              <UserProfileStats
                numOfTransExp={profile?.expenses?.length}
                avgExp={expResult?.avg}
                totalExp={expResult?.sumTotal}
                minExp={expResult?.min}
                maxExp={expResult?.max}
                numOfTransInc={profile?.income?.length}
                avgInc={incResult?.avg}
                totalInc={incResult?.sumTotal}
                minInc={incResult?.min}
                maxInc={incResult?.max}
              />
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() => navigate(history, "user-profile-expenses", "")}
                  className="btn navbutton me-4 mt-3 w-100 d-flex align-items-center justify-content-center"
                >
                  <span>View Expenses History</span>
                </button>
                <button
                  onClick={() => navigate(history, "user-profile-income", "")}
                  className="btn navbutton mt-3 w-100 d-flex align-items-center justify-content-center"
                >
                  <span>View Income History</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
