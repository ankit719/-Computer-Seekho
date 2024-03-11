import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Paymentup() {
    const [payment, setPayments] = useState({});
    const { id } = useParams();
    
    const [batches, setBatches] = useState([]);

    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/payment/" + id)
            .then(res => res.json())
            .then((result) => {
                setPayments(result);
            }
            ).catch((e)=>console.log(e));

  

        fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(setBatches);
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPayments(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(payment);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/payment/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');

        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Payment ID:</label>
            <input
                type="text"
                name="payment_id"
                vaue={payment.payment_id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
          <label>Student ID:</label>
            <input type="text" 
            name="student_id"
            value={payment.student_id ?? ""}
            disabled={true}
            onChange={handleChange} />


            <label>Batch ID:</label>
            <select name="batchId" value={payment.batchId ?? ""} onChange={handleChange}>
                {batches.map(batch => (
                    <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
                ))}
                 </select>
            
           
            <label>Transaction ID:</label>
            <input
                type="text"
                name="transaction_id"
                value={payment.transaction_id ?? ""}
                onChange={handleChange}
            />
            <label>Date:</label>
            <input
                type="date"
                name="date"
                value={payment.date ?? ""}
                onChange={handleChange}
            />
            <label>Amount (in ₹):</label>
            <input
                type="text"
                name="amount"
                value={payment.amount ?? ""}
                onChange={handleChange}
            />
           
            <label>Payment Type ID:</label>
            <input
                type="text"
                name="payment_type_id"
                value={payment.payment_type_id ?? ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
    );
} export default Paymentup;
