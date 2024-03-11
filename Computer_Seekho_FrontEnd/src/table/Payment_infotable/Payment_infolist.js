import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Payment_infolist() {
  const [Payment, setPayment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/payment_info")
      .then((res) => res.json())
      .then((result) => {
        setPayment(result);
      });
  }, []);

  return (
    <div>
      <h2>Payment_info data...</h2>
      <h4>
        <Link to="/Payment_infocreate">Create</Link>
      </h4>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>paymentId</th>
            <th>Payment_method_Description</th>
           
          </tr>
        </thead>
        <tbody>
          {Payment.map((entity1) => (
            <tr key={entity1.payment_infoId}>
              <td>{entity1.paymentMethodDescription}</td>
             
              <td>
                <Link to={`/Payment_info/${entity1.payment_infoId}`}>Display</Link>
                <Link to={`/Payment_infoup/${entity1.payment_infoId}`}>Edit</Link>
                <Link to={`/Payment_infodel/${entity1.payment_infoId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payment_infolist;
