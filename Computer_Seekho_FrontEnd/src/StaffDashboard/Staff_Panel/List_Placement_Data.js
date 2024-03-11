import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function List_Placement_Data() {

    const [placement_Data, setPlacement_Data] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/placement")
            .then(res => res.json())
            .then((result) => { setPlacement_Data(result); }
            );
    }, []);


    return (
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <button>
                <h4><Link to="/Create">Create</Link></h4>
            </button>

            <h2>Placement data...</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#f0f0f0', borderRadius: '10px' }}><thead>
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
                    {placement_Data.map(p => (
                        <tr key={p.placement_Data_Id}>
                            <td>{p.placement_Data_Id}</td>
                            <td>{p.p_Id}</td>
                            <td>{p.placement_Id}</td>
                            <td>{p.company_Id}</td>
                            <td>{p.designation}</td>
                            <td>{p.batch_Id}</td>
                            <td>{p.status}</td>

                            <td><a href={'/placement/' + p.placement_Data_Id}>display</a></td>
                            <td><a href={'/Placementup/' + p.placement_Data_Id}>Edit</a></td>
                            <td><a href={'/placementdel/' + p.placement_Data_Id}>delete</a></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
