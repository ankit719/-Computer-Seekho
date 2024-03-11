import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Payment_infoup(){
    const [Payment,setPayment]=useState({});
    const {id}=useParams();
    let navigate=useNavigate();
    
    useEffect(()=>{
        fetch("http://localhost:8080/api/payment_info/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setPayment(result);      
        }).catch((e)=>console.log(e));
    },{Payment});
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setPayment(values=>({...values,[name]:value}))
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        let demo=JSON.stringify(Payment);
        console.log(JSON.parse(demo));

        fetch("http://localhost:8080/api/payment_info/"+id, {
         method: 'PUT',
         headers: { 'Content-type': 'application/json' },
         body: demo,
     })
     .then((response) => response.json())
     .then((data) => {
         console.log('Update successful:', data);
         navigate('/');
     })
     .catch((error) => {
         console.error('Error updating data:', error);
     });
    }
    return(
        <form onSubmit={handleSubmit}>
         
            {/* <label>Id:</label>
            <input
               type="number"
               name="batchId"
               value={Batch.batchId ?? ""}
               disabled={true}
               onChange={handleChange}
            /> */}

            
            <br/><label>Payment_Method_Description:</label>
           <input
               type="hidden"
               name="payment_infoId"
               value={Payment.payment_infoId ?? ""}
               onChange={handleChange}
            />
            <input
               type="text"
               name="paymentMethodDescription"
               value={Payment.paymentMethodDescription ?? ""}
               onChange={handleChange}
            />
           
            <input type="submit"/>
            </form>
    );

        }
export default Payment_infoup;