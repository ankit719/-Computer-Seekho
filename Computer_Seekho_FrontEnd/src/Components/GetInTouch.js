import { useEffect, useState } from "react";
import './GetInTouch.css';

export default function GetInTouch() {

    const [getdetails, setDetails] = useState();
    const [msgBody, setMsgBody] = useState();

    const handleOnchange = (event) => {
        setDetails((eml) => ({ ...eml, [event.target.name]: event.target.value }));
        setMsgBody((msg) => ({ ...msg, [event.target.name]: event.target.value }));
        console.log(getdetails);
    }
    const sendEmail = (event) => {
        event.preventDefault();

        console.log(JSON.stringify(getdetails));

        fetch("http://localhost:8080/api/sendMail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getdetails, { msgBody: msgBody.msgBody })
        })
            .then((data) => {
                console.log(data);
                alert("Inserted");
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }

    return (
        <div className="getInTouch">
            <h2>Get In Touch</h2>
            <form onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name" require onChange={handleOnchange} /><br />


                <label htmlFor="email">Email</label><br />
                <input type="email" name="recipient" placeholder="Enter your email" require onChange={handleOnchange} /><br />

                <label htmlFor="query">Query</label><br />

                <textarea id="msgBody" name="msgBody" placeholder="Enter your query" required onChange={handleOnchange}></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
