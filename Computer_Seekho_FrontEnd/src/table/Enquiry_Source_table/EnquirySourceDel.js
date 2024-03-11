import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"

export function EnquirySourceDel(){
    const [enquirysrc, setEnquirySource] = useState([]);
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/enquirysrc/" + id)
            .then(res => res.json())
            .then((result) => { setEnquirySource(result); }
            );
    }, [id]);
    const handledel = (event) => {
        fetch("http://localhost:8080/api/enquirysrc/" + id, {
            method: 'DELETE'
        })
        .then(res => res)
        .then((result) => {
            console.log(result)
        }); 
        navigate('/');
    }
    return (
                <div>
                    <h1 style={{ color:'green' }}>Are You Sure Want to Delete?</h1>
                    {enquirysrc.map((enq)=>
                        <>
                        <label>ID: </label>
                        {enq.enquiry_Source_Id}<br />
                        <label>Enquiry Source: </label>
                        {enq.enquiry_Source}<br />
                        </>
                    )}
                    <form onSubmit={handledel}>
                        <input type="submit" />
                    </form>
                </div>
        );
    }
export default EnquirySourceDel;
        