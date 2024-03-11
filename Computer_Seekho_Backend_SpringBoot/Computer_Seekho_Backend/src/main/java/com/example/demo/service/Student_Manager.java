package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Payment;
import com.example.demo.entity.Student_Entity;
@Component
public interface Student_Manager {

	void addEntity(Student_Entity student);
	void delete(int student_id);
	void update(Student_Entity student, int id);
	List<Student_Entity> getStudent();
	void UpdateFeePro(Payment p);
	Optional<Student_Entity> getPlacementbyId(int student_id);
}