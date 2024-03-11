import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function List_Followup() {
  const [followupId, setFollowupId] = useState([]);

  const [followup, setFollowup] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/Followupenq")
      .then(res => res.json())
      .then((result) => { setFollowup(result); }
      );
  }, []);




  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFollowup((values) => ({ ...values, [name]: value }));
  };

  const handleClose = async (followup_id) => {
    try {
      const followResponse = await fetch(`http://localhost:8080/api/Followup/${followup_id}`);
      const followResult = await followResponse.json();
      setFollowupId(followResult);
      console.log(followupId);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  const handleAdd = async (followup_id) => {


  }



  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>

      <h2>Followup Data...</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
        <thead>
          <tr>
            <th >Followup ID</th>
            <th  >Enquiry ID</th>
            <th  >Followup Date</th>
            <th  >Followup Message</th>
            <th  >Next Followup Date</th>
            <th  >Staff ID</th>
            <th  >Attempts</th>
            <th  >Action</th>
          </tr>
        </thead>
        <tbody>
          {followup.map(follow => (
            <tr key={follow.followup_id}>
              <td  >{follow.followup_id}</td>
              <td  >{follow.enquiry_id}</td>
              <td  >{follow.followup_Date}</td>
              <td  >{follow.followup_Message}</td>
              <td  >{follow.next_Followup_date}</td>
              <td  >{follow.staff_id}</td>
              <td  >{follow.attempts}</td>

              <td  ><button>< Link to={`/Update_Followup/${follow.followup_id}`}>Action</Link></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
