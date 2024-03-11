import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

function Batchup(){
    const [Batch,setBatch]=useState({});
    const {id}=useParams();
    let navigate=useNavigate();
    
    useEffect(()=>{
        fetch("http://localhost:8080/api/batches/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setBatch(result);      
        }).catch((e)=>console.log(e));
    },{Batch});
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setBatch(values=>({...values,[name]:value}))
    }
    
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(Batch);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/batches/"+id, {
         method: 'PUT',
         headers: { 'Content-type': 'application/json' },
         body: demo,
     })
     .then((response) => response.json())
     .then((data) => {
         console.log('Update successful:', data);
         navigate('/');
     })
     .catch((error) => {
         console.error('Error updating data:', error);
     });
    }
    return(
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
      <form onSubmit={handleSubmit} style={{overflowX :'auto'}}>
         
            {/* <label>Id:</label>
            <input
               type="number"
               name="batchId"
               value={Batch.batchId ?? ""}
               disabled={true}
               onChange={handleChange}
            /> */}

      
            <br/><label>Batch_Name:</label>
            <input
               type="text"
               name="batchName"
               value={Batch.batchName ?? ""}
               onChange={handleChange}
            />
            <br/><label>Batch_Year:</label>
            <input
               type="date"
               name="batchYear"
               value={Batch.batchYear ?? ""}
               onChange={handleChange}
            />
            <br/><label>Batch_Logo:</label>
            <input
               type="text"
               name="batchLogo"
               value={Batch.batchLogo ?? ""}
               onChange={handleChange}
            />
             <br/><label>Start_date:</label>
            <input
               type="date"
               name="startDate"
               value={Batch.startDate ?? ""}
               onChange={handleChange}
            />
            <br/><label>End_date:</label>
            <input
               type="date"
               name="endDate"
               value={Batch.endDate ?? ""}
               onChange={handleChange}
            />
            <br/><label>Course_Id:</label>
            <input
               type="number"
               name="courseId"
               value={Batch.courseId ?? ""}
               onChange={handleChange}
            />
             
            <br/><label>Cover_Photo:</label>
            <input
               type="text"
               name="coverPhoto"
               value={Batch.coverPhoto ?? ""}
               onChange={handleChange}
            />
            <br/><label>Final_Presentation_Date:</label>
            <input
               type="date"
               name="finalPresentationDate"
               value={Batch.finalPresentationDate ?? ""}
               onChange={handleChange}
            />
            <br/>
            <input type="submit"/>
            </form>
            </div>
            </div>
    );

}
export default Batchup;