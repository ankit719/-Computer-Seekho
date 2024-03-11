import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ClosureList(){
    const [clo, setClosure] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/closure")
        .then(res => res.json())
        .then((result) => {setClosure(result);});
    }, []);

    return(
        <div>
            <h2>Enquiry Source</h2>
            <h4><Link to="/CreateClosure">Create</Link></h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {clo.map(c => (
                        <tr key = {c.closure_Id}>
                            <td>{c.closure_Id}</td>
                            <td>{c.closure_Reason}</td>
                            <td>
                                <Link to={`/Closure/${c.closure_Id}`}> Display </Link>
                                <Link to={`/ClosureUp/${c.closure_Id}`}> Edit </Link>
                                <Link to={`/ClosureDel/${c.closure_Id}`}> Delete </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ClosureList;