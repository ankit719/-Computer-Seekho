import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function Campuslifedel() {
    const [campus, setCampuslifedel] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/campuslife/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setCampuslifedel(result);
            });
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/api/campuslife/${id}`, {
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
            navigate('/ListAllStudents')
    };

    return (
        <div>
            <h1 style={{ color: 'blue' }}>Are you sure you want to delete the record?</h1>
            <label>campusLifeId</label>
            {campus.campusLifeId}<br />
            <label>photo</label>
            {campus.photo}<br />
            <label>batchId:</label>
            {campus.batchId}<br />
            <label>staffId:</label>
            {campus.staffId}<br/>
            <label>video</label>
            {campus.video}<br />
            <form onSubmit={handleDelete}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </div>
    );
}

export default Campuslifedel;
