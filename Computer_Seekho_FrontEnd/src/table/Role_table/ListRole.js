import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListRole() {
  const [listrole, setListRole] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/role")
      .then((res) => res.json())
      .then((result) => {
        setListRole(result);
      });
  }, []);

  return (
    <div>
      <h4>
        <Link to="/CreateRole">Create</Link>
      </h4>
      <h2>Role data...</h2>
      <table>
        <thead>
          <tr>
            <th>role_id</th>
            <th>role</th>
           
          </tr>
        </thead>
        <tbody>
        {listrole.map(rol=>(
                        <tr key={rol.role_id}>
                            <td>{rol.role_id}</td>
                            <td>{rol.role}</td>
                           
                            <td><a href={'/Role/'+rol.role_id}>Display</a></td>
                            <td><a href={'/UpRole/'+rol.role_id}>Edit</a></td> 
                            <td><a href={'/DelRole/'+rol.role_id}>delete</a></td>
                        </tr>
                    ))
                }
        </tbody>
      </table>
    </div>
  );
          }

export default ListRole;