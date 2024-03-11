import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ListMaintenance.css";

function ListMaintenance() {
  const [listmaintenance, setListMaintenance] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/maintenance")
      .then((res) => res.json())
      .then((result) => {
        setListMaintenance(result);
      });
  }, []);

  return (
    <div  ListMaintenance={styles.container}> 
      
      <h4>
        <Link to="/CreateMaintenance">Create</Link>
      </h4>
      <h2>Maintenance data...</h2>
      <table>
        <thead>
          <tr>
            <th>maintenance_id</th>
            <th>staff_id</th>
            <th>changing_date</th>
            {/* <th>note</th> */}
            {/* <th>reason</th> */}
            <th>record_id</th>
            <th>table_name</th>
          </tr>
        </thead>
        <tbody>
        {listmaintenance.map(main=>(
                        <tr key={main.maintenance_id}>
                            <td>{main.maintenance_id}</td>
                            <td>{main.staff_id}</td>
                            <td>{main.changing_date}</td>
                            {/* <td>{main.note}</td> */}
                            {/* <td>{main.reason}</td> */}
                            <td>{main.record_id}</td>
                            <td>{main.table_name}</td>
                            <td><Link to={`/Maintenance/${main.maintenance_id}`}>Display</Link></td>
                            <td><Link to={`/UpMaintenance/${main.maintenance_id}`}>Edit</Link></td>
                            <td><Link to={`/DelMaintenance/${main.maintenance_id}`}>Delete</Link></td>
                        </tr>
                    ))
                }
        </tbody>
      </table>
    </div>
  );
          }

export default ListMaintenance;