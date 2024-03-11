import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Placement_vacancyList() {
  const [placement_vacancy, setPlacement_vacancy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/Placement_vacancy")
      .then((res) => res.json())
      .then((result) => {
        setPlacement_vacancy(result);
      });
  }, []);

  return (
    <div className="table-wrapper">
      <h4>
        <Link to="/AddPlacement_vacancy">Add Placement Vacancy</Link>
      </h4>
      <h2>Placement Vacancy Data</h2>
      <table>
        <thead>
          <tr>
            <th>p_id</th>
            <th>Company Name</th>
            <th>Vacancy</th>
            <th>Location_id</th>
          </tr>
        </thead>
        <tbody>
          {placement_vacancy.map((pv) => (
            <tr key={pv.p_id}>
              <td>{pv.p_id}</td>
              <td>
                <CompanyName company_id={pv.company_id} />
              </td>
              <td>{pv.vacancy}</td>
              <td>{pv.location_id}</td>
              {/* <td><CityName location_id={pv.location_id} /></td> */}
              <td>
                <Link to={`/Placement_vacancy/${pv.p_id}`}>Display</Link>
              </td>
              <td>
                <Link to={`/UpdatePlacement_vacancy/${pv.p_id}`}>Edit</Link>
              </td>
              <td>
                <Link to={`/DelPlacement_vacancy/${pv.p_id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompanyName({ company_id }) {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    if (company_id) {
      fetch(`http://localhost:8080/api/companys/${company_id}`)
        .then((res) => res.json())
        .then((data) => {
          setCompany(data);
        })
        .catch((error) => {
          console.error("Error fetching company data:", error);
        });
    }
  }, [company_id]);

  return company ? company.company_name : "Loading...";
}

// function CityName({ location_id }) {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     if (location_id) {
//       fetch(`http://localhost:8080/api/location/${location_id}`)
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setLocation(data);
//         })
//         .catch((error) => {
//           console.error("Error fetching location data:", error);
//         });
//     }
//   }, [location_id]);

//   return location && location.city ? location.city : "Loading...";
// }

export default Placement_vacancyList;
