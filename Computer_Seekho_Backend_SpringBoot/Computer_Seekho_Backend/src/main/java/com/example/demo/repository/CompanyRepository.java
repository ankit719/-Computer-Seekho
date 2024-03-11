package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Company;

import jakarta.transaction.Transactional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
/*private int company_id;
	private String company_name;
	private String logo;
	private int location_id;
	private int total_placement;
*/
	    @Modifying
		@Transactional
		@Query("update Company p set p.company_name = :company_name, p.logo=:logo,"
		+ "p.location = :location, p.total_placement=:total_placement where p.company_id = :company_id")
		void update(@Param("company_name") String company_name,@Param("logo")String logo,@Param("location") String location,
				@Param("total_placement") int total_placement,@Param("company_id")int company_id);
}
