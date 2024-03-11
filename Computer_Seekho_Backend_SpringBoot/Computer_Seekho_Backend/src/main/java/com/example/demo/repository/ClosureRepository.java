package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Closure;

@Repository
public interface ClosureRepository extends JpaRepository<Closure, Integer> 
{
	@Modifying
	@Transactional
	@Query("update Closure c set c.closure_Reason = :reason where c.closure_Id = :id")
	void update(@Param("reason") String reason, @Param("id") int id);

	@Query("from Closure c where c.closure_Id=:id")
	List<Closure> listId(@Param("id") int id);
}