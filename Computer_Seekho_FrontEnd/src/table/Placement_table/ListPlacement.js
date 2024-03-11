import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function ListPlacement()
{
    const [placement_Data, setPlacement_Data]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/placement")
        .then(res=>res.json())
        .then((result)=>{setPlacement_Data(result);}
        );
    },[]);
    return(
        <div>
            <h4><Link to="/Create">Create</Link></h4>
            <h2>Placement data...</h2>
            <table><thead>
                <tr>
                    <th>Placement_Data_Id</th>
                    <th>P_Id</th>
                    <th>Placement_Id</th>
                    <th>Company_Id</th>
                    <th>Designation</th>
                    <th>Batch_Id</th>
                    <th>Status</th>
                </tr>
            </thead>
                <tbody>
                    {placement_Data.map(p=>(
                        <tr key={p.placement_Data_Id}>
                            <td>{p.placement_Data_Id}</td>
                            <td>{p.p_Id}</td>
                            <td>{p.placement_Id}</td>
                            <td>{p.company_Id}</td>
                            <td>{p.designation}</td>
                            <td>{p.batch_Id}</td>
                            <td>{p.status}</td>
                            
                            <td><a href={'/placement/'+p.placement_Data_Id}>display</a></td>
                            <td><a href={'/Placementup/'+p.placement_Data_Id}>Edit</a></td>
                            <td><a href={'/placementdel/'+p.placement_Data_Id}>delete</a></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
export default ListPlacement;