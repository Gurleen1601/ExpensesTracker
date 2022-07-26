import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './DataGrap.css'
ChartJS.register(ArcElement, Tooltip, Legend);

const DataGrap = ({ income, expenses }) => {
  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        label: "# expenses",
        data: [expenses, income],
        backgroundColor: [
          "rgba(19,214,143, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(19,214,143,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        height: "60%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // marginLeft: '40%',
        // marginRight: '5%',
        // marginTop:'2%'

      }}
    >
      <div>
        <h2 className="display-4 fw-normal text-center mb-5" style={{ fontStyle: 'italic' }}>
<span  style={{color:"rgb(19,214,143)", fontSize:'80px'
}}>E</span><span style={{borderBottom: '3px solid rgb(19,214,143)'}}>xpenses</span>
        </h2>
      </div>
      <Pie data={data} />
    </div>
  );
};

export default DataGrap;
