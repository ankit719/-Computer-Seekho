import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EnquirySourceList(){
    const [enquirysrc, setEnquirySource] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/enquirysrc")
        .then(res => res.json())
        .then((result) => {setEnquirySource(result);});
    }, []);

    return(
        <div>
            <h2>Enquiry Source</h2>
            <h4><Link to="/CreateEnquirySource">Create</Link></h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Enquiry Source</th>
                    </tr>
                </thead>
                <tbody>
                    {enquirysrc.map(enq => (
                        <tr key = {enq.enquiry_Source_Id}>
                            <td>{enq.enquiry_Source_Id}</td>
                            <td>{enq.enquiry_Source}</td>
                            <td>
                                <Link to={`/EnquirySource/${enq.enquiry_Source_Id}`}> Display </Link>
                                <Link to={`/EnquirySourceUp/${enq.enquiry_Source_Id}`}> Edit </Link>
                                <Link to={`/EnquirySourceDel/${enq.enquiry_Source_Id}`}> Delete </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default EnquirySourceList;