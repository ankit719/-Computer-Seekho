package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Payment;
import com.example.demo.entity.Student_Entity;
import com.example.demo.repository.Student_Repository;


@Service
public class Student_ManagerImpl implements Student_Manager 
{
	@Autowired
	Student_Repository repository;

	 @Override
	    public void addEntity(Student_Entity student) {
	        repository.save(student);
	    }

	@Override
	public void delete(int student_id) {
		// TODO Auto-generated method stub
		
		repository.deleteById(student_id);
	}

	@Override
	public void update(Student_Entity student, int id) {
		// TODO Auto-generated method stub
		repository.update1(student.getStudent_name(),student.getEnquiry_id(),
				student.getBatch_id(),student.getRegistration_date(),student.getPayment_id(),
				student.getPhoto(),student.getContact_no(),student.getEmail(),student.getGender(),
				student.getLocation_id(),student.getDate_of_birth(),student.getQualification(),
				student.getCourse_id(),student. getTotal_fees(),student.getFees_paid(),id);
	}
	@Override
	public List<Student_Entity> getStudent() {
		// TODO Auto-generated method stub
		System.out.println("inside manager imp");
		return repository.findAll();
	}

	@Override
	public Optional<Student_Entity> getPlacementbyId(int student_id) {
		// TODO Auto-geated method stub
		return repository.findById(student_id);
				
	}
	
	public void UpdateFeePro(Payment p){
		System.out.println("Inside student managementImp"+ p.getStudent_id()+"--> "+p.getAmount());
		 int id=p.getStudent_id();
		 double amount=p.getAmount();
		 Student_Entity std=repository.findById(id).orElse(null);
		 if(std != null) {
			 std.setFees_paid(std.getFees_paid()+amount);
		 }
		 repository.save(std);
		
	}

	
}
