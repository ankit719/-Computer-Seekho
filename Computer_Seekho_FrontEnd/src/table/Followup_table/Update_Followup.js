import React, { useState, useEffect } from 'react';
import FacultyDashBoard from '../../Pages/FacultyDashBoard';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardPage from '../../Pages/DashboardPage ';

export default function Update_Followup() {
  const [closure, setClosure] = useState([]);
  const [followup, setFollowup] = useState({ followup_id: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [enquiry, setEnquiry] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const followResponse = await fetch(`http://localhost:8080/api/Followup/${id}`);
        const followResult = await followResponse.json();
        setFollowup(followResult);

        const closureResponse = await fetch('http://localhost:8080/api/closure');
        const closureResult = await closureResponse.json();
        setClosure(closureResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);


  useEffect(() => {
    const fetchEnquiryData = async () => {
      try {
        console.log(followup.enquiry_id);

        const response = await fetch(`http://localhost:8080/api/enquiry/${followup.enquiry_id}`);
        const result = await response.json();

        setEnquiry(result);
      } catch (error) {
        console.log('Error fetching enquiry data:', error);
      }

    };

    fetchEnquiryData();
  }, [followup.enquiry_id]);







  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFollowup((values) => ({ ...values, [name]: value }));
  };

  const calculateFollowUpDate = (days) => {
    const currentDate = new Date();
    const followUpDate = new Date(currentDate);
    followUpDate.setDate(currentDate.getDate() + days);
    return followUpDate.toISOString().split('T')[0];
  };


  useEffect(() => {
    // Log the updated enquiry state whenever it changes
    console.log('Updated Enquiry:', enquiry);
  }, [enquiry]);


  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    console.log(enquiry);
    try {
      console.log(' Enquiry:', enquiry);
      const response = await fetch(`http://localhost:8080/api/enquiry/${followup.enquiry_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          ...enquiry,
          closure: followup.closure, // Use selected closure from dropdown
        }),
      });

      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      console.error('Error processing close:', error);
    }

    setShowPopup(false);

    const followUpDate = calculateFollowUpDate(3);

    const demo = {
      enquiry_id: followup.enquiry_id,
      staff_id: sessionStorage.getItem('userID'),
      followup_Date: new Date().toISOString(),
      next_Followup_date: new Date().toISOString(),
      attempts: followup.attempts + 1,
      followup_Message: followup.followup_Message,
    };

    try {
      const response = await fetch('http://localhost:8080/api/Followup', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(demo),
      });

      if (response.ok) {
        console.log(response);
      }

      const role = sessionStorage.getItem('Role');
      if (role === 'Staff') {
        navigate('/StaffDashBoard');
      }
      if (role === 'Admin') {
        navigate('/AdminDashBoard');
      }
    } catch (error) {
      console.error('Error processing close:', error);
    }


  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (followup.attempts == 3) {
      setShowPopup(true);
    } else {
      const followUpDate = calculateFollowUpDate(3);

      const demo = {
        enquiry_id: followup.enquiry_id,
        staff_id: sessionStorage.getItem('userID'),
        followup_Date: new Date().toISOString(),
        next_Followup_date: followUpDate,
        attempts: followup.attempts + 1,
        followup_Message: followup.followup_Message,
      };

      try {
        const response = await fetch('http://localhost:8080/api/Followup', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(demo),
        });

        if (response.ok) {
          console.log(response);
        }

        const role = sessionStorage.getItem('Role');
        if (role === 'staff') {
          navigate('/StaffDashBoard');
        }
        if (role === 'admin') {
          navigate('/AdminDashBoard');
        }
      } catch (error) {
        console.error('Error processing close:', error);
      }
    }
  };

  return (
    <div>

      {(() => {
        const role = sessionStorage.getItem('Role');
        if (role === 'staff') {
          return <FacultyDashBoard />;
        } else if (role === 'admin') {
          return <DashboardPage />;
        }
      })()}


      <div className="cardD">
        <form onSubmit={handleSubmit}>
          <label>Enquiry Id:</label>
          {followup.enquiry_id}
          <br />
          <label>followup_Message:</label>
          <input type="text" name="followup_Message" onChange={handleChange} />
          <br />
          <input type="submit" />
        </form>

        {showPopup && (
          <div>
            <h2>Closure Reason</h2>
            <form onSubmit={handlePopupSubmit}>
              <label>Reason:</label>
              <select name="closure" onChange={handleChange}>
                <option>Select Option</option>
                {closure.map((emp) => (
                  <option key={emp.closure_Id} value={emp.closure_Reason}>
                    {emp.closure_Reason}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit">Submit</button>
              <br/>
              <button type="button" onClick={handlePopupClose}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
