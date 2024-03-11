import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export function Payments() {
    const [payment, setPayments] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/payment/" + id)
            .then(res => res.json())
            .then((result) => { 
                console.log('Payment data:', result);  // Log the payment data
                setPayments(result); 
            });
    }, []);

    
    const styles = {
        container: {
            width: '50%',
            margin: 'auto',
            padding: '20px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
            border: '1px solid #ccc'
        },
       
        label: {
            display: 'block',
            marginTop: '20px',
            color: '#666'
        },
        value: {
            fontSize: '12px',
            color: '#333'
        }
    };

    return (
        <div style={styles.container}>
            <h2>Payment Table Data</h2>
            <label style={styles.label}>Payment Id:</label>
            <div style={styles.value}>{payment.payment_id}</div>

            <label style={styles.label}>Student Id:</label>
            <div style={styles.value}>{payment.student_id}</div>
            
            <label style={styles.label}>batch Id:</label>
            <div style={styles.value}>{payment.batch_id}</div>

            <label style={styles.label}>Transaction Id:</label>
            <div style={styles.value}>{payment.transaction_id}</div>
            
            <label style={styles.label}>payment Type Id:</label>
            <div style={styles.value}>{payment.payment_type_id}</div>
            
            <label style={styles.label}>payment Date:</label>
            <div style={styles.value}>{payment.date}</div>
            
            <label style={styles.label}>payment Amount:</label>
            <div style={styles.value}>{payment.amount}</div>
        </div>
    );
}
export default Payments;