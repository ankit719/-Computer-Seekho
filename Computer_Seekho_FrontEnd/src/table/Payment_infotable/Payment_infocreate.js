import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment_infocreate() {
    const [payment, setPayment] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPayment((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        let demo = JSON.stringify(payment);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/payment_info", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo,
        }).then((r) => {
            console.log(r);
        });

        event.preventDefault();
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <br/><label>payment_infoId:</label>
            <input
                type="number"
                name="payment_infoId"
                onChange={handleChange}
            />
            <br/><label>paymentMethodDescription:</label>
            <input
                type="text" 
                name="paymentMethodDescription"
                onChange={handleChange}
            />
                      
            <input type="submit"/>
        </form>
    );
}