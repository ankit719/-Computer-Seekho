import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpRole(){
    const [uprole,setUpRole] = useState({});
    const { role_id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8080/api/role/"+role_id)
        .then(res=>res.json())
        .then((result)=>{
            setUpRole(result);      
        }).catch((e)=>console.log(e));
    },[role_id]);
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUpRole(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(uprole);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/role/"+role_id,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:demo
        }).then(r=>{console.log(r)})
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Role ID:</label>
            <input
               type="number"
               name="role_id"
               value={uprole.role_id ?? ""}
               disabled={true}
               onChange={handleChange}
            />
            <br/>
            <label>Role:</label>
            <input
               type="text"
               name="role"
               value={uprole.role ?? ""}
               onChange={handleChange}
            />
            <br/>
            <input type="submit"/>
            </form>
    );
}
export default UpRole;
