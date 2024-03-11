import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Placementup() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [placement_Data, setPlacement_Data] = useState([]);
    const [formData, setFormData] = useState({});
    const [batchOptions, setBatchOptions] = useState([]);
    const [companyOptions, setCompanyOptions] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`http://localhost:8080/api/placement/${id}`)
            .then(res => res.json())
            .then(result => {
                setFormData(result);
            })
            .catch(error => console.error("Error fetching placement data:", error));

        fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(result => {
                setBatchOptions(result.map(batch => ({
                    label: batch.batchName,
                    value: batch.batchId
                })));
            })
            .catch(error => console.error("Error fetching batch data:", error));

        fetch("http://localhost:8080/api/desig")
            .then(res => res.json())
            .then((result) => {
                setPlacement_Data(result);
            })
            .catch(error => console.error("Error fetching data:", error));

        fetch("http://localhost:8080/api/companys")
            .then(res => res.json())
            .then((result) => {
                setCompanyOptions(result.map(company => ({
                    label: company.company_name,
                    value: company.company_id
                })))
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleBatchSelect = (selectedBatchId) => {
        setFormData(prevData => ({ ...prevData, batch_Id: selectedBatchId }));
    }

    const handleCompanySelect = (selectedCompanyId) => {
        setFormData(prevData => ({ ...prevData, company_Id: selectedCompanyId }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let demo = JSON.stringify(formData);
        fetch(`http://localhost:8080/api/placement/${id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        .then(response => {
            if (response.ok) {
                console.log("Placement updated successfully");
                navigate('/');
            } else {
                console.error("Failed to update placement");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>P_Id:</label>
            <input
                type="int"
                name="p_Id"
                value={formData.p_Id}
                onChange={handleChange}
            />
            <br /><label>Placement_Id:</label>
            <input
                type="int"
                name="placement_Id"
                value={formData.placement_Id}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="company_id">Company ID:</label>
            <select name="company_id" onChange={(e) => handleCompanySelect(e.target.value)} value={formData.company_Id}>
                <option>Select Company</option>
                {companyOptions.map((com, index) => (
                    <option key={index} value={com.value}>{com.label}</option>
                ))}
            </select>
            <br />
            <label htmlFor="batch_Id">Batch Name:</label>
            <select name="batch_Id" onChange={(e) => handleBatchSelect(e.target.value)} value={formData.batch_Id}>
                <option>Select Batch</option>
                {batchOptions.map((batch, index) => (
                    <option key={index} value={batch.value}>{batch.label}</option>
                ))}
            </select>
            <br/>
            <label htmlFor="Designation_Id">Designation</label>
            <select name="designation" onChange={handleChange} value={formData.designation}>
                <option>SelectOption</option>
                {placement_Data.map((p, index) => (
                    <option key={index} value={p.designation_id}>{p.designation}</option>
                ))}
            </select>
            <br /><label>Status:</label>
            <input
                type="text"
                name="status"
                onChange={handleChange}
                value={formData.status}
            />
            <br />
            <input type="submit" />
        </form>
    )
}
