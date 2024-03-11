import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Payment_info() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/payment_info/"+id)
            .then(res => res.json())
            .then((result) => {
                setPayment(result);
            });
    }, [id]);

    return (
        <div>
            <label>payment_infoId:</label> {payment.payment_infoId}<br />
            <label>PaymentMethodDescription:</label> {payment.paymentMethodDescription}<br />
        
        </div>
    );
}
export default Payment_info;