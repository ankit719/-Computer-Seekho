import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListDesignation(){
    const [designation, setDesignation] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/designation")
        .then(res => res.json())
        .then((result) => {setDesignation(result);});
    }, []);

    return(
        <div>
            <h2>Designation</h2>
            <h4><Link to="/CreateDesignation">Create</Link></h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {designation.map(desig => (
                        <tr key = {desig.designation_Id}>
                            <td>{desig.designation_Id}</td>
                            <td>{desig.designation}</td>
                            <td>
                                <Link to={`/Designation/${desig.designation_Id}`}> Display </Link>
                                <Link to={`/Designationup/${desig.designation_Id}`}> Edit </Link>
                                <Link to={`/Designationdel/${desig.designation_Id}`}> Delete </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListDesignation;