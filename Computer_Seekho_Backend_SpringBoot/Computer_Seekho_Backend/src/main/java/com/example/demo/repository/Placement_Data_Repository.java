package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Placement_Data;

import jakarta.transaction.Transactional;

@Repository
public interface Placement_Data_Repository extends JpaRepository<Placement_Data, Integer> {
	@Modifying
	@Transactional
	@Query("update Placement_Data p set p.p_Id = :pid, p.PRN = :prn, p.company_Id = :cid, p.designation = :desig, p.batch_Id = :bid, p.status = :sts where p.placement_Data_Id = :id")
	public void update(@Param("pid") int pid, @Param("prn") String prn, @Param("cid") int cid, @Param("desig") String desig, @Param("bid") int bid, @Param("sts") String sts, @Param("id") int id);
}
