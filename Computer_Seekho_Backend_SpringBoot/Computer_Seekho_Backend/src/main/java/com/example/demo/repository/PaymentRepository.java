package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.*;

import jakarta.transaction.Transactional;
public interface PaymentRepository extends JpaRepository<Payment,Integer> {
	@Modifying
    @Transactional
    @Query(value = "SELECT * FROM Payment p WHERE p.student_id = :studentId", nativeQuery = true)
   List<Payment> getPaymentStudentRepo(@Param("studentId") int studentId);

}
