import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Placement_vacancy(){
    const [placement_vacancy,setPlacement_vacancy] = useState({});
    const{id}=useParams()
    useEffect(()=>{
        fetch("http://localhost:8080/api/Placement_vacancyById/"+id)
        .then(res=>res.json())
        .then((result)=>{setPlacement_vacancy(result);}
        );
    },[id]);
    
    
    const [location,setLocation] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:8080/api/location/`+ placement_vacancy.location_id )
        .then(res=>res.json())
        .then((abc)=>{setLocation(abc);}
        );
        console.log(location);
    },[placement_vacancy.location_id]);  
    
    return( 
        <div>
            <label>p_id:</label> {placement_vacancy.p_id}<br/>
            <label>company_id:</label> {placement_vacancy.company_id}  <br/>            
            <label>vacancy:</label> {placement_vacancy.vacancy}<br/>
            <label>location_id:</label> {placement_vacancy.location_id} :{location.city} , {location.pincode}<br/>
        </div>
    );
}

