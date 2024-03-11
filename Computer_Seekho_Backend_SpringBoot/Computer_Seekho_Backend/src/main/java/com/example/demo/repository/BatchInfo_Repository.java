package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BatchInfo_Entity;

import jakarta.transaction.Transactional;

@Repository
public interface BatchInfo_Repository extends JpaRepository<BatchInfo_Entity, Integer> {
    @Modifying
    @Transactional
    @Query("update BatchInfo_Entity b set b.BatchId = :bid, b.Staff_Id = :sid, b.Subject = :sub where b.Batch_Info_Id = :id")
    void update(@Param("bid") int batchId, @Param("sid") int staffId, @Param("sub") String subject, @Param("id") int id);
}
