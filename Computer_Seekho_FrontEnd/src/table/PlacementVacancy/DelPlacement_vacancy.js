import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function DelPlacement_vacancy() {
  const [placement_vacancy, setPlacement_vacancy] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/Placement_vacancyById/`+ id)
      .then((res) => res.json())
      .then((result) => {
        setPlacement_vacancy(result);
      });
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/api/Placement_vacancy/`+id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Placement vacancy deleted successfully.");
          navigate("/");
        } else {
          console.log("Failed to delete placement vacancy.");
        }
      })
      .catch((error) => {
        console.error("Error deleting placement vacancy:", error);
      });
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>
        Are you sure you want to delete the record?
      </h1>
            <label>ID :</label>
            {placement_vacancy.p_id}
            <br/>
            
            <label>company_id</label>
            {placement_vacancy.company_id}
            <br/>

            <label>location_id:</label>
            {placement_vacancy.location_id}
            <br/>

            <label>vacancy:</label>
            {placement_vacancy.vacancy}
            <br/>
      <form onSubmit={handleDelete}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  );
}

export default DelPlacement_vacancy;
