package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.service.Student_Manager;
import com.example.demo.entity.Payment;
import com.example.demo.entity.Student_Entity;



@RestController
@CrossOrigin("*")
public class Student_Controller {
	
	     @Autowired
		Student_Manager manager;

		 @DeleteMapping("api/student/{student_id}")
		 public void delete(@PathVariable int student_id)
		 {
			 System.out.println("id for delete is\t"+student_id);
			 manager.delete(student_id);
		 }
		 
		 @PutMapping("api/student/{id}")	
		 public void updatepro(@RequestBody Student_Entity student,@PathVariable int id)
		 {
			System.out.println("inside updatepro of controller");
			manager.update(student ,id);
		 }
		 
		 @PostMapping("api/student")
		 public void addEntity(@RequestBody Student_Entity student)
		 {
			System.out.println("addpro called");
			System.out.println(student.getStudent_id());
			manager.addEntity(student);
		 }
		 @GetMapping("api/student")
		public List<Student_Entity> showStudent()
		{
			 System.out.println("inside get");
			  return manager.getStudent(); 
		}
		
		@GetMapping("api/student/{student_id}")
		public Optional<Student_Entity> getplacementbyid(@PathVariable int student_id) {
		    // TODO Auto-generated method stub
		    return manager.getPlacementbyId(student_id);          
		}
		
		@PutMapping("api/update/student/feepaid")
		 public void UpdateFee(@RequestBody Payment payment)
		 {
			System.out.println("Inside student controller");
			manager.UpdateFeePro(payment);
		}
		
		

}

