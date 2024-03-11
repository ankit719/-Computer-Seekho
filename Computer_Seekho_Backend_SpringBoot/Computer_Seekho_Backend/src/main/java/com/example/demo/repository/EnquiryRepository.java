package com.example.demo.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Enquiry;

import jakarta.transaction.Transactional;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Integer> 
{
	@Modifying
	@Transactional
	@Query("update Enquiry e set e.enquireerName = :enm, e.qualification = :qual, e.contact_No = :cno, e.email = :eml, e.enquiry_Date = :edate, e.enquiry_Source = :esid, e.student_Name = :snm, e.location = :loc, e.enquireer_Query = :eqr, e.closure = :cid, e.next_Followup_Date = :nfdt, e.course = :crs, e.staff_Id = :sid, e.date_Of_Birth = :dob, e.other_Closure_Reason = :ocr where e.enquiry_Id = :id")
	void update(@Param("enm") String enm, @Param("qual") String qual, @Param("cno") String cno, @Param("eml") String eml, @Param("edate") Date edate, @Param("esid") String esid, @Param("snm") String nm, @Param("loc") String loc, @Param("eqr") String eqr, @Param("cid") String cid, @Param("nfdt") Date nfdt, @Param("crs") String crs, @Param("sid") int sid, @Param("dob") Date dob, @Param("ocr") String ocr, @Param("id") int id);
	
	@Query("from Enquiry d where  d.student_Name LIKE %:nm%")
	List<Enquiry> listname(@Param("nm") String nm);
	
	 @Query(value ="SELECT * FROM Enquiry ORDER BY enquiry_id DESC limit 5", nativeQuery=true)
	    List<Enquiry> findLatestEnquiry();
	 
	 @Query("from Enquiry d where  d.contact_No LIKE %:cn%")
		List <Enquiry> listcontact(@Param("cn") String cn);
	
	    
}
