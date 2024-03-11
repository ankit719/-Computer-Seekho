import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Role(){
    const [role,setRole] = useState([]);
    const{role_id}=useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/role/"+role_id)
            .then(res => res.json())
            .then((result) => {
                setRole(result);
            });
    }, [role_id]);
return(
    <div>
        <label>role_id:</label> {role.role_id}<br/>
        <label>role:</label> {role.role}<br/>
      
    </div>

      );
};

export default Role;