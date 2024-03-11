package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Location;

import jakarta.transaction.Transactional;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	@Modifying
	@Transactional
	@Query("update Location l set l.city = :city, l.country = :country, l.landmark = :landmark, l.pincode = :pincode where l.location_Id = :id")
    void updateLocation(@Param("id") int id, @Param("city") String city, @Param("country") String country, @Param("landmark") String landmark, @Param("pincode") String pincode);
	
	@Query("from Location l where l.location_Id = :id")
	List<Location> listId(@Param("id") int id);
}
