package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Qualification;


public interface QualificationRepository extends JpaRepository<Qualification ,Integer > 
{
	
	
//	@Modifying
//	@Transactional
//	
//	//void update(@Param("qualification_id") int qualification_id,@Param("qualification")String qualification);
//	
//	//void update(String qualification, int qualification_id);	
}

