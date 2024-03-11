import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Designation() {
    const [designation, setDesignation] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/designation/" + id)
            .then(res => res.json())
            .then(result => {
                setDesignation(result);
            })
            .catch(error => {
                console.error('Error fetching designation:', error);
            });
    }, [id]);

    return (
        <div>
            {designation.map((des)=>(
            <><label>Id:</label>
            {des.designation_Id}
            <br />
            <label>Designation:</label>
            {des.designation}
            </>

            ))
}
            <br/>
        </div>
    );
};

export default Designation;
