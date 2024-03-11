import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Closure() {
    const [clo, setClosure] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/closure/" + id)
            .then(res => res.json())
            .then(result => {
                setClosure(result);
            })
            .catch(error => {
                console.error('Error fetching Closure:', error);
            });
    }, [id]);

    return (
        <div>
            {clo.map((c)=>(
            <><label>Id: </label>
            {c.closure_Id}
            <br />
            <label>Reason: </label>
            {c.closure_Reason}
            </>

            ))
}
            <br/>
        </div>
    );
};

export default Closure;
