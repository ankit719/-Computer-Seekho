import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export default function CreatePlacement() {
    const [placement_Data, setPlacement_Data] = useState([]);
    const [formData, setFormData] = useState({});
    const [batchOptions, setBatchOptions] = useState([]);
    const [companyOptions, setCompanyOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(result => {
                console.log("Batches:", result);
                setBatchOptions(result.map(batch => ({
                    label: batch.batchName,
                    value: batch.batchId // Assuming batchId is the correct attribute name
                })));
            })
            .catch(error => console.error("Error fetching batch data:", error));

            fetch("http://localhost:8080/api/desig")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setPlacement_Data(result);
            })
            .catch(error => console.error("Error fetching data:", error));

            fetch("http://localhost:8080/api/companys")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setCompanyOptions(result.map(company =>({
                    label: company.company_name,
                    value:company.company_id
                })))
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(formData);
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
        console.log("Form Data:", JSON.parse(demo));
        fetch("http://localhost:8080/api/placement", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <div >

        {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'staff') {
                return <FacultyDashBoard />;
            } else if (role === 'admin') {
                return <DashboardPage />;
            }
        })()}




        <div className="cardD" >
        <form onSubmit={handleSubmit} style={{overflowX: 'auto'}}>
            <label>P_Id:</label>
            <input
                type="int"
                name="p_Id"
                onChange={handleChange}
            />
            <br /><label>Placement_Id:</label>
            <input
                type="int"
                name="placement_Id"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="company_id">Company ID:</label>
            <select name="company_id" onChange={(e) => handleCompanySelect(e.target.value)}>
                <option>Select Company</option>
                {companyOptions.map((com, index) => (
                    <option key={index} value={com.value}>{com.label}</option>
                ))}
            </select>
            <br />
            <label htmlFor="batch_Id">Batch Name:</label>
            <select name="batch_Id" onChange={(e) => handleBatchSelect(e.target.value)}>
                <option>Select Batch</option>
                {batchOptions.map((batch, index) => (
                    <option key={index} value={batch.value}>{batch.label}</option>
                ))}
            </select>
            <br/>
            <label htmlFor="Designation_Id">Designation</label>
            <select name="designation" onChange={handleChange}>
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
            />
            <br />
            <input type="submit" />
        </form>
        </div>

</div>    )
}
