import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function List_Payment_Staff() {

    const [payment, setPayments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/payment")
            .then(res => res.json())
            .then((result) => {
                console.log("result---->", result);
                setPayments(result);
            });
    }, []);



    return (
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <button>
                <h4><Link to="/Createpayment">Create</Link></h4>
            </button>

            <h2>Payment Table</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
                <thead>
                    <tr>
                        <th  >Payment ID</th>
                        <th  >Student ID</th>
                        <th  >Transaction ID</th>
                        <th  >Payment Date</th>
                        <th  >Payment Amount</th>
                        <th  >Batch ID</th>
                        <th  >Payment Type ID</th>
                    </tr>
                </thead>
                <tbody>
                    {payment.map(singlePayment => (
                        <tr key={singlePayment.payment_id}>
                            <td  >{singlePayment.payment_id}</td>
                            <td  >{singlePayment.student_id}</td>
                            <td  >{singlePayment.transaction_id}</td>
                            <td  >{new Date(singlePayment.date).toLocaleDateString('en-GB')}</td>
                            <td  >{singlePayment.amount}</td>
                            <td  >{singlePayment.batch_id}</td>
                            <td  >{singlePayment.payment_type_id}</td>
                            <td  ><a href={'/paydisp/' + singlePayment.payment_id}>display</a></td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
