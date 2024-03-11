import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PRNGenerator() {
    const [prngen, setPRNGenerator] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/prngen/" + id)
            .then(res => res.json())
            .then(result => {
                setPRNGenerator(result);
            })
            .catch(error => {
                console.error('Error fetching PRN:', error);
            });
    }, [id]);

    return (
        <div>
            {prngen.map((pl)=>(
            <><label>PRN: </label>
            {pl.prn}
            <br />
            <label>Student ID: </label>
            {pl.student_Id}
            </>

            ))
}
            <br/>
        </div>
    );
};

export default PRNGenerator;
