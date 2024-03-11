import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export function Paymentdel() {
    const [payment, setPayments] = useState({});
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/payment/" + id)
            .then(res => res.json())
            .then((result) => { setPayments(result); });
    }, {});

    const handeldel = (event) => {
        fetch("http://localhost:8080/api/payment/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            }); 
            navigate('/');
    }

    // Define your styles
    const styles = {
        prompt: {
            color: 'red',
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'left',
            marginTop: '20px'
        }
    };

    return (
        <div>
            <h1 style={styles.prompt}>Are you sure you want to delete?</h1>
            <label>Id:</label>
            {payment.payment_id}<br />
            <form onSubmit={handeldel}>
                <input type="submit" />
            </form>
        </div>
    );
}
export default Paymentdel;