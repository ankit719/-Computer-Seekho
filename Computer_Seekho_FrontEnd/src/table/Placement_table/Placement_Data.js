import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Placement_Data(){
    const[placement_Data,setPlacement_Data]=useState({});
    const { temp } = useParams();

    useEffect(()=>{
        fetch("http://localhost:8080/api/placement/"+temp)
        .then(res=>res.json())
        .then((result)=>{setPlacement_Data(result);});
    },[]);
return (
    <div>
        
            <label>Placement_Data_Id:</label> {placement_Data.placement_Data_Id}<br/>
            <label>P_Id:</label> {placement_Data.p_Id}<br/>
            <label>Placement_Id:</label> {placement_Data.placement_Id}<br/>
            <label>Company_Id:</label>{placement_Data.company_Id} <br/>
            <label>Designation:</label>{placement_Data.designation} <br/>
            <label>Batch_Id:</label> {placement_Data.batch_Id}<br/>
            <label>Status:</label>{placement_Data.status} <br/>
    </div>
    );
}
