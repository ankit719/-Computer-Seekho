package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Enquiry_Source;

import jakarta.transaction.Transactional;

@Repository
public interface Enquiry_Source_Repository extends JpaRepository<Enquiry_Source, Integer> {
	@Modifying
	@Transactional
	@Query("update Enquiry_Source e set e.enquiry_Source = :enquiry_Source where e.enquiry_Source_Id = :id")
	void update1(@Param("id") int id,@Param ("enquiry_Source") String enquiry_Source);
	
	@Query("from Enquiry_Source e where e.enquiry_Source_Id = :id")
	List<Enquiry_Source> listId(@Param("id") int id);
}
