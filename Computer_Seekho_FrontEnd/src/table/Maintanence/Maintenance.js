import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Maintenance(){
    const [maintenance,setMaintenance] = useState([]);
    const{maintenance_id}=useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/maintenance/"+maintenance_id)
            .then(res => res.json())
            .then((result) => {
                setMaintenance(result);
            });
    }, [maintenance_id]);
return(
    <div>
        <label>maintenance_id:</label> {maintenance.maintenance_id}<br/>
        <label>staff_id:</label> {maintenance.staff_id}<br/>
        <label>changing_date:</label> {maintenance.changing_date}<br/>
        {/* <label>note:</label> {maintenance.note}<br/> */}
        {/* <label>reason:</label> {maintenance.reason}<br/> */}
        <label>record_id:</label> {maintenance.record_id}<br/>
        <label>table_name:</label> {maintenance.table_name}<br/>
      
    </div>

      );
};