package com.example.demo.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Follow_up;

import jakarta.transaction.Transactional;

@Repository

public interface Followup_repository extends JpaRepository<Follow_up, Integer> 
{
	@Transactional
	@Modifying
	  @Query("Update Follow_up f set f.enquiry_id=:eid, f.followup_Date=:Date,f.next_Followup_date=:fDate ,f.staff_id=:sid, f.followup_Message=:fim, f.attempts=:att where followup_id=:id")
    void update(@Param("eid") int eid, @Param("Date") Date Date,@Param("fDate") Date fDate, @Param("sid") int sid, @Param("fim") String fim, @Param("att") int att, @Param("id") int id);

	 @Query("SELECT e FROM Follow_up e WHERE (e.enquiry_id, e.attempts) IN ( SELECT e2.enquiry_id, MAX(e2.attempts) FROM Follow_up e2 WHERE e2.attempts < 4 GROUP BY e2.enquiry_id ) AND e.enquiry_id NOT IN ( SELECT e3.enquiry_id FROM Follow_up e3 WHERE e3.attempts = 4 )")  
	 List<Follow_up> getListGroup();

	 
	

}
