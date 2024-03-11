import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Campuslife(){
    const [campus,setCampuslife] = useState([]);
    const{id}=useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/campuslife/"+id)
            .then(res => res.json())
            .then((result) => {
                setCampuslife(result);
            });
    }, [id]);
return(
    <div>
        <label>Id:</label> {campus.campusLifeId}<br/>
        <label>Photo:</label> {campus.photo}<br/>
        <label>Batchid:</label> {campus.batchId}<br/>
        <label>Staffid:</label> {campus.staffId}<br/>
        <label>Video:</label> {campus.video}<br/>
    </div>

      );
};

    export default Campuslife;