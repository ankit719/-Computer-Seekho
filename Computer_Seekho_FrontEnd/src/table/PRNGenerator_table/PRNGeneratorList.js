import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PRNGeneratorList(){
    const [prngen, setPRNGenerator] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/prngen")
        .then(res => res.json())
        .then((result) => {setPRNGenerator(result);});
    }, []);

    return(
        <div>
            <h2>PRN Generator</h2>
            <h4><Link to="/CreatePRNGenerator">Create</Link></h4>
            <table>
                <thead>
                    <tr>
                        <th>PRN</th>
                        <th>Student ID</th>
                    </tr>
                </thead>
                <tbody>
                    {prngen.map(pl => (
                        <tr key = {pl.prn}>
                            <td>{pl.prn}</td>
                            <td>{pl.student_Id}</td>
                            <td>
                                <Link to={`/PRNGenerator/${pl.prn}`}> Display </Link>
                                <Link to={`/PRNGeneratorUp/${pl.prn}`}> Edit </Link>
                                <Link to={`/PRNGeneratorDel/${pl.prn}`}> Delete </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default PRNGeneratorList;