import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LocationList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/location")
            .then(res => res.json())
            .then(result => {
                setLocation(result);
            });
    }, []);

    return (
        <div className="container">
            <h2>Location</h2>
            <h4><Link to="/CreateLocation">Create</Link></h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Landmark</th>
                        <th>Pincode</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {location.map(loc => (
                        <tr key={loc.location_Id}>
                            <td>{loc.location_Id}</td>
                            <td>{loc.city}</td>
                            <td>{loc.country}</td>
                            <td>{loc.landmark}</td>
                            <td>{loc.pincode}</td>
                            <td>
                                <Link to={`/Location/${loc.location_Id}`}>Display</Link>
                                <Link to={`/Locationup/${loc.location_Id}`}>Edit</Link>
                                <Link to={`/Locationdel/${loc.location_Id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LocationList;
