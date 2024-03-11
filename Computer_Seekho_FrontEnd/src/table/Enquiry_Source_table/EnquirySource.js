import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EnquirySource() {
    const [enquirysrc, setEnquirySource] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/enquirysrc/" + id)
            .then(res => res.json())
            .then(result => {
                setEnquirySource(result);
            })
            .catch(error => {
                console.error('Error fetching Enquiry:', error);
            });
    }, [id]);

    return (
        <div>
            {enquirysrc.map((enq)=>(
            <><label>Id: </label>
            {enq.enquiry_Source_Id}
            <br />
            <label>Enquiry Source: </label>
            {enq.enquiry_Source}
            </>

            ))
}
            <br/>
        </div>
    );
};

export default EnquirySource;
