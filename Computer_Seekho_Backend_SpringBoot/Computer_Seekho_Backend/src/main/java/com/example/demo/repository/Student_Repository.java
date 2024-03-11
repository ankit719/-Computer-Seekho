package com.example.demo.repository;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Student_Entity;

import jakarta.transaction.Transactional;

@Repository

public interface Student_Repository extends JpaRepository<Student_Entity, Integer>{
@Transactional
@Modifying

@Query("UPDATE Student_Entity s SET " +
        "s.student_name = COALESCE(:student_name, s.student_name), " +
        "s.enquiry_id = COALESCE(:enquiry_id, s.enquiry_id), " +
        "s.batch_id = COALESCE(:batch_id, s.batch_id), " +
        "s.registration_date = COALESCE(:registration_date, s.registration_date), " +
        "s.payment_id = COALESCE(:payment_id, s.payment_id), " +
        "s.photo = COALESCE(:photo, s.photo), " +
        "s.contact_no = COALESCE(:contact_no, s.contact_no), " +
        "s.email = COALESCE(:email, s.email), " +
        "s.gender = COALESCE(:gender, s.gender), " +
        "s.location_id = COALESCE(:location_id, s.location_id), " +
        "s.date_of_birth = COALESCE(:date_of_birth, s.date_of_birth), " +
        "s.qualification = COALESCE(:qualification, s.qualification), " +
        "s.course_id = COALESCE(:course_id, s.course_id), " +
        "s.total_fees = COALESCE(:total_fees, s.total_fees), " +
        "s.fees_paid = COALESCE(:fees_paid, s.fees_paid) " +
        "WHERE s.student_id = :id")
void update1(@Param("student_name") String studentName,
             @Param("enquiry_id") Integer enquiryId,
             @Param("batch_id") Integer batchId,
             @Param("registration_date") Date registrationDate,
             @Param("payment_id") Integer paymentId,
             @Param("photo") String photo,
             @Param("contact_no") String contactNo,
             @Param("email") String email,
             @Param("gender") String gender,
             @Param("location_id") Integer locationId,
             @Param("date_of_birth") Date dateOfBirth,
             @Param("qualification") String qualification,
             @Param("course_id") Integer courseId,
             @Param("total_fees") Double totalFees,
             @Param("fees_paid") Double feesPaid,
             @Param("id") int id);

}
 