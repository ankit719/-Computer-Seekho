import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
export function Designationdel(){
    const [desig, setDesignation] = useState([]);
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/designation/" + id)
            .then(res => res.json())
            .then((result) => { setDesignation(result); }
            );
    }, [id]);
    const handledel = (event) => {
        fetch("http://localhost:8080/api/designation/" + id, {
            method: 'DELETE'
        })
        .then(res => res)
        .then((result) => {
            console.log(result)
        }); 
        navigate('/ListDesignation');
    }
    return (
                <div>
                    <h1 style={{ color:'green' }}>Are You Sure Want to Delete?</h1>
                    {desig.map((des)=>
                        <>
                        <label>ID:</label>
                        {des.designation_Id}<br />
                        <label>Designation:</label>
                        {des.designation}<br />
                        </>
                    )}
                    <form onSubmit={handledel}>
                        <input type="submit" />
                    </form>
                </div>
        );
    }
export default Designationdel;
        