import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpMaintenance(){
    const [upmaintenance,setUpMaintenance] = useState({});
    const { maintenance_id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8080/api/maintenance/"+maintenance_id)
        .then(res=>res.json())
        .then((result)=>{
            setUpMaintenance(result);      
        }).catch((e)=>console.log(e));
    },[maintenance_id]);
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUpMaintenance(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(upmaintenance);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/maintenance/"+maintenance_id,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:demo
        }).then(r=>{console.log(r)})
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Maintenance ID:</label>
            <input
               type="number"
               name="maintenance_id"
               value={upmaintenance.maintenance_id ?? ""}
               disabled={true}
               onChange={handleChange}
            />
            <br/>
            <label>Staff_id:</label>
            <input
               type="number"
               name="staff_id"
               value={upmaintenance.staff_id ?? ""}
               onChange={handleChange}
            />
            <br/><label>Name:</label>
            <input
               type="text"
               name="table_name"
               value={upmaintenance.table_name ?? ""}
               onChange={handleChange}
            />
            <br/><label>Record ID:</label>
            <input
               type="number"
               name="record_id"
               value={upmaintenance.record_id || ""}
               onChange={handleChange}
            />
            {/* <br/><label>Reason:</label>
            <input
               type="text"
               name="reason"
               value={upmaintenance.reason || ""}
               onChange={handleChange}
            /> */}
             <br/><label>Changing Date:</label>
            <input
               type="date"
               name="changing_date"
               value={upmaintenance.changing_date || ""}
               onChange={handleChange}
            />
            {/* <br/><label>Note:</label>
            <input
               type="text"
               name="note"
               value={upmaintenance.note || ""}
               onChange={handleChange}
            /> */}
            <br/>
            <input type="submit"/>
            </form>
    );
}
export default UpMaintenance;
