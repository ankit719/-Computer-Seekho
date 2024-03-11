package com.example.demo.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Batch;

import jakarta.transaction.Transactional;
@Repository

	@Transactional
	public interface BatchRepository extends JpaRepository<Batch, Integer> {
	    // Additional custom queries or methods can be added here if needed
		@Query(value="SELECT * from Batch where start_date=:shrisha",nativeQuery=true)
	public List<Batch> findbydate(@Param("shrisha")Date date);
	
		
		
		@Modifying
		@Query(value = "UPDATE Batch SET batch_name=:Batch_Name, Batch_Year=:Batch_year, Batch_Logo=:Batch_logo, Start_date=:start_date, End_date=:end_date, Course_Id=:courseid, Final_Presentation_Date=:datet,Cover_Photo=:cover WHERE batch_id=:Batch_Id", nativeQuery = true)
		public void updateBatch(@Param("Batch_Name") String Batch_Name,@Param("Batch_year") Date BatchYear,@Param("Batch_logo") String batchLogo,@Param("start_date")Date startDate,@Param("end_date") Date endDate,@Param("courseid") int courseId,@Param("datet") Date finalPresentationDate,@Param("cover") String coverPhoto,@Param("Batch_Id") int batch_Id);
}
	

