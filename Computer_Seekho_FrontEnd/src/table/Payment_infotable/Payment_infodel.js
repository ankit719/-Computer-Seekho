import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function Payment_infodel() {
    const [Payment, setPaymentdel] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/payment_info/"+id)
            .then((res) => res.json())
            .then((result) => {
                setPaymentdel(result);
            });
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/api/payment_info/"+id, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Student deleted successfully.');
                    navigate('/');
                } else {
                    console.log('Failed to delete student.');
                }
            })
            .catch((error) => {
                console.error('Error deleting student:', error);
            });
            navigate('/Payment_infolist')
    };

    return (
        <div>
            <h1 style={{ color: 'blue' }}>Are you sure you want to delete the record?</h1>
            <label>payment_infoId</label>
            {Payment.payment_infoId}<br />
            <label>paymentMethodDescription</label>
            {Payment.paymentMethodDescription}<br />
            
           
            <form onSubmit={handleDelete}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </div>
    );
}

export default Payment_infodel;
