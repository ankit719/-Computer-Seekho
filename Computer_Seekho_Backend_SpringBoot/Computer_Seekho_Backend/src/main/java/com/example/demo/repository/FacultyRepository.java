package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Faculty;

import jakarta.transaction.Transactional;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty,Integer>{

	    @Modifying
		@Transactional
		 @Query("UPDATE Faculty s SET s.username = :username, s.role = :role, s.password = :password, s.name = :name, " +
		            "s.designation = :designation, s.qualification = :qualification, s.experience = :experience, " +
		            "s.contact_no = :contact_no, s.email = :email, s.photo = :photo, s.location_id = :location_id, " +
		            "s.joining_Date = :joining_Date   WHERE s.staff_id = :staff_id")
		          

		 void update(@Param("username") String username, @Param("role") String role, @Param("password") String password,
		                    @Param("name") String name, @Param("designation") String designation,
		                    @Param("qualification") String qualification, @Param("experience") String experience,
		                    @Param("contact_no") String contactNo, @Param("email") String email,
		                    @Param("photo") String photo, @Param("location_id") int location_id,
		                    @Param("joining_Date") java.util.Date date,
		                     @Param("staff_id") int staff_id);


	    @Query("SELECT f FROM Faculty f WHERE f.username = :username AND f.password = :password")
	    Optional<Faculty> LogIn(@Param("username") String username, @Param("password") String password);


	
}
