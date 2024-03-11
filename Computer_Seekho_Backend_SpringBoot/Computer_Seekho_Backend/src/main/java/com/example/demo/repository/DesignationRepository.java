package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Designation;

@Repository
public interface DesignationRepository extends JpaRepository<Designation, Integer> {
	@Modifying
	@Transactional
	@Query("update Designation d set d.designation = :desig where d.designation_Id = :id")
	void update(@Param("desig") String desig, @Param("id") int id);
	
	@Query("from Designation d where d.designation_Id=:id")
	List<Designation> listId(@Param("id") int id);
}
