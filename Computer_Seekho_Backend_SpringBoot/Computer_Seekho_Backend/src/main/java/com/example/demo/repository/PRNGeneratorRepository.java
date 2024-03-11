package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PRNGenerator;

import jakarta.transaction.Transactional;

@Repository
public interface PRNGeneratorRepository extends JpaRepository<PRNGenerator, Integer>{
	@Modifying
	@Transactional
	@Query("update PRNGenerator p set p.student_Id = :sid where p.PRN = :id")
	void update(@Param("sid") int sid, @Param("id") int id);
	
	@Query("from PRNGenerator p where p.PRN = :id")
	List<PRNGenerator> listId(@Param("id") int id);
}