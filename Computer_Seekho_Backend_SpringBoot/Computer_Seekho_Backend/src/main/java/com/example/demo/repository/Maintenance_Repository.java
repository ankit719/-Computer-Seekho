package com.example.demo.repository;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Maintenance_Entity;

import jakarta.transaction.Transactional;


@Repository
public interface Maintenance_Repository extends JpaRepository<Maintenance_Entity, Integer> {
	@Modifying
	@Transactional
	@Query("update Maintenance_Entity m set m.staff_id = :sid, m.table_name = :tname, m.record_id = :rid, m.changing_date = :cdate where m.maintenance_id = :id")
	public void update(@Param("sid") int sid, @Param("tname") String tname,@Param("rid") int rid,@Param("cdate") Date cdate,@Param("id") int id);
}
