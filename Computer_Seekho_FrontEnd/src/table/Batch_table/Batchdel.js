import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FacultyDashBoard from '../../Pages/FacultyDashBoard';
import DashboardPage from '../../Pages/DashboardPage ';
export function Batchdel() {
    const [Batch, setBatchdel] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/batches/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setBatchdel(result);
            });
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/api/batches/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Student deleted successfully.');
                    navigate('/');
                } else {
                    console.log('Failed to delete student.');
                }
            })
            .catch((error) => {
                console.error('Error deleting student:', error);
            });
            navigate('/Batchlist')
    };

    return (
        <div>

         {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'Staff') {
               return <FacultyDashBoard />;
            } else if (role === 'admin') {
               return <DashboardPage />;
            }
         })()}


         <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <h1 style={{ color: 'blue' }}>Are you sure you want to delete the record?</h1>
            <label>batchId</label>
            {Batch.batchId}<br />
            <label>batchLogo</label>
            {Batch.batchLogo}<br />
            <label>startDate</label>
            {Batch.startDate}<br />
            <label>endDate:</label>
            {Batch.endDate}<br />
            <label>courseId:</label>
            {Batch.courseId}<br />
            <label>finalPresentationDate</label>
            {Batch.finalPresentationDate}<br />
            <label>coverPhoto:</label>
            {Batch.coverPhoto}<br />
            
            <form onSubmit={handleDelete}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </div>
        </div>
    
    );
}

export default Batchdel;
