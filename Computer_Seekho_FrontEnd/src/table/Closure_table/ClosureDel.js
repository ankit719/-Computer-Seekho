import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"

export function ClosureDel(){
    const [clo, setClosure] = useState([]);
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/closure/" + id)
            .then(res => res.json())
            .then((result) => { setClosure(result); }
            );
    }, [id]);
    const handledel = (event) => {
        fetch("http://localhost:8080/api/closure/" + id, {
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
                    {clo.map((c)=>
                        <>
                        <label>ID: </label>
                        {c.closure_Id}<br />
                        <label>Reason: </label>
                        {c.closure_Reason}<br />
                        </>
                    )}
                    <form onSubmit={handledel}>
                        <input type="submit" />
                    </form>
                </div>
        );
    }
export default ClosureDel;
        