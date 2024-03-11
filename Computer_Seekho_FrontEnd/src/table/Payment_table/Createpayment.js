import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

export default function Createpayment() {
    const [students, setStudents] = useState([]);
    const [batches, setBatches] = useState([]);
    const [payment, setPayments] = useState({});
    const [paymentinfo, setPaymentinfo] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/student")
            .then(response => response.json())
            .then(data => {
                console.log('Students:', data); setStudents(data);
            });

        fetch("http://localhost:8080/api/payment_info")
            .then(response => response.json())
            .then(data => {
                console.log('paymentinfo:', data); setPaymentinfo(data);
            });

        fetch("http://localhost:8080/api/batches")
            .then(response => response.json())
            .then(data => setBatches(data));
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPayments(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        fetch("http://localhost:8080/api/payment", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(payment)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("entry added");
            }).catch(error => console.log(error));

            try {
                const response = await fetch("http://localhost:8080/api/update/student/feepaid", {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payment)
                });
          
                if (response.ok) {
                  console.log("Payment updated successfully");
                  navigate("/StaffDashBoard");
                  // Optionally handle success, such as showing a success message
                } else {
                  console.error("Failed to update payment:", response.statusText);
                  // Optionally handle error, such as displaying an error message to the user
                }
              } catch (error) {
                console.error("Error updating payment:", error);
                // Optionally handle network errors, such as displaying an error message to the user
              }
                
    }

    return (
        <div>
            {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'staff') {
               return <FacultyDashBoard />;
            } else if (role === 'admin') {
               return <DashboardPage />;
            }
         })()}<div className="cardD"> 
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', overflowX:'auto'}}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Student name:</label>
            <select name="student_id" onChange={handleChange}>
                {students.map(student => (
                    <option key={student.student_id} value={student.student_id}>
                        {student.student_name}
                    </option>
                ))}
            </select>
            <label>Transaction ID:</label>
            <input
                type="text"
                name="transaction_id"
                onChange={handleChange}
            />
            <label>Date:</label>
            <input
                type="date"
                name="date"
                onChange={handleChange}
            />
            <label>Amount (in ₹):</label>
            <input
                type="text"
                name="amount"
                onChange={handleChange}
            />
            <label>Batch Name:</label>
            <select name="batch_id" onChange={handleChange}>
                {batches.map(batch => (
                    <option key={batch.batchId} value={batch.batchId}>
                        {batch.batchName}

                    </option>
                ))}
            </select>
            <label>Payment Type ID:</label>
            <select name="payment_infoId" onChange={handleChange}>
                {paymentinfo.map(payment => ( // Fix typo here from 'paymet' to 'payment'
                    <option key={payment.payment_infoId} value={payment.payment_infoId}>
                        {payment.paymentMethodDescription} {/* Fix accessing property here */}
                    </option>
                ))}
            </select>

            <br />
            <input type="submit" style={{ marginTop: '20px' }} />
        </form>
        </div>
        </div>
    );
}




