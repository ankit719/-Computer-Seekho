package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Placement_vacancy;

@Repository
public interface Placement_vacancyRepository extends JpaRepository<Placement_vacancy, Integer> 
{

	
//	@Query("update Placement_Vacancy p set p.Vacancy = :Vacancy, p.Company_id=:Company_id , p.Company_id = :Company_id, p.Location_id=:Location_id where p.Placement_Vacancy = :P_id")
//	public Placement_vacancy update(@Param("P_id") int P_id,@Param("Vacancy")int Vacancy,@Param("Company_id") int Company_id, @Param("Location_id") int Location_id);
//	
//	
//	@Query("from Product p where p.category=:cat")
//	List<Product> listCat(@Param("cat") String name);

}
