import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FeeReceipt.css"; // Import CSS file for styling
import FacultyDashBoard from "./FacultyDashBoard";
import DashboardPage from "./DashboardPage ";

function FeeReceipt() {
    const [student, setStudent] = useState({});
    const [payment, setPayment] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchStudentData(id);
            fetchPaymentData(id);
        }
    }, [id]);

    const fetchStudentData = (id) => {
        fetch("http://localhost:8080/api/student/" + id)
            .then(res => res.json())
            .then((result) => {
                setStudent(result);
            })
            .catch(error => console.error("Error fetching student data:", error));
    };

    const fetchPaymentData = (id) => {
        fetch("http://localhost:8080/api/getpaymentdetail/" + id)
            .then(res => res.json())
            .then((result) => {
                setPayment(result);
            })
            .catch(error => console.error("Error fetching payment data:", error));
    };

    return (
        <div>
        {(() => {
        const role = sessionStorage.getItem('Role');
        if (role === 'staff') {
           return <FacultyDashBoard />;
        } else if (role === 'admin') {
           return <DashboardPage />;
        }
     })()}
     <div className="cardD" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', overflowX:'auto'}}> 
        <div className="fee-receipt-container">
            <h1>Fee Receipt</h1>
            <div className="student-details">
                <h2>Student Details</h2>
                <p>Student ID: {student.student_id}</p>
                <p>Name: {student.student_name}</p>
                <p>Contact No.: {student.contact_no}</p>
                <p>Email ID: {student.email}</p>
                {/* Add more student details as needed */}
            </div>
            <div className="payment-details">
                <h2>Payment Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Amount</th>
                            {/* Add more table headers as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {payment.map(pay => (
                            <tr key={pay.payment_id}>
                                <th>{pay.payment_id}</th>
                                <td>{pay.transaction_id}</td>
                                <td>{pay.date}</td>
                                <td>{pay.amount}</td>
                                {/* Add more table cells for additional payment details */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <form id="fee-receipt-form">
                {/* Add form fields for generating fee receipt */}
            </form>
        </div>
        </div>
        </div>
    );
}

export default FeeReceipt;
