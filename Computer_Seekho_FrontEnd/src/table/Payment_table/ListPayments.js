import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import FacultyDashBoard from '../../Pages/FacultyDashBoard';
import DashboardPage from '../../Pages/DashboardPage ';

function ListPayments() {
    const [payment, setPayments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/payment")
            .then(res => res.json())
            .then((result) => {
                console.log("result---->", result);
                setPayments(result);
            });
    }, []);

    // Define your styles
    const styles = {
        table: {
            width: '100%',
            marginTop: '20px',
            borderCollapse: 'collapse'
        },
        cell: {
            border: '1px solid #ccc',
            padding: '10px'
        }
    };

    return (
        <div >

        {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'staff') {
                return <FacultyDashBoard />;
            } else if (role === 'admin') {
                return <DashboardPage />;
            }
        })()}




        <div className="cardD" >
       
            <h4><Link to="/create">Create</Link></h4>
            <h2>Payment Table</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.cell}>Payment ID</th>
                        <th style={styles.cell}>Student ID</th>
                        <th style={styles.cell}>Transaction ID</th>
                        <th style={styles.cell}>Payment Date</th>
                        <th style={styles.cell}>Payment Amount</th>
                        <th style={styles.cell}>Batch ID</th>
                        <th style={styles.cell}>Payment Type ID</th>
                    </tr>
                </thead>
                <tbody>
                    {payment.map(singlePayment => (
                        <tr key={singlePayment.payment_id}>
                            <td style={styles.cell}>{singlePayment.payment_id}</td>
                            <td style={styles.cell}>{singlePayment.student_id}</td>
                            <td style={styles.cell}>{singlePayment.transaction_id}</td>
                            <td style={styles.cell}>{new Date(singlePayment.date).toLocaleDateString('en-GB')}</td>
                            <td style={styles.cell}>{singlePayment.amount}</td>
                            <td style={styles.cell}>{singlePayment.batch_id}</td>
                            <td style={styles.cell}>{singlePayment.payment_type_id}</td>
                            <td style={styles.cell}><a href={'/paydisp/' + singlePayment.payment_id}>display</a></td>
                            <td style={styles.cell}><a href={'/payup/' + singlePayment.payment_id}>update</a></td>
                            <td style={styles.cell}><a href={'/paydel/' + singlePayment.payment_id}>delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default ListPayments;