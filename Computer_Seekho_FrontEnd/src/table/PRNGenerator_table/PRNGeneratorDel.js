import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
export function PRNGeneratorDel(){
    const [prngen, setPRNGenerator] = useState([]);
    const { id } = useParams();
    const navigate= useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/prngen/" + id)
            .then(res => res.json())
            .then((result) => { setPRNGenerator(result); }
            );
    }, [id]);
    const handledel = (event) => {
        fetch("http://localhost:8080/api/prngen/" + id, {
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
                    {prngen.map((pl)=>
                        <>
                        <label>PRN: </label>
                        {pl.prn}<br />
                        <label>Student ID: </label>
                        {pl.student_Id}<br />
                        </>
                    )}
                    <form onSubmit={handledel}>
                        <input type="submit" />
                    </form>
                </div>
        );
    }
export default PRNGeneratorDel;
        