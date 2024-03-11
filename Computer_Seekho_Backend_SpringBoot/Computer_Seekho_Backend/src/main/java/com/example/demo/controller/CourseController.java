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

import com.example.demo.entity.Course;
import com.example.demo.service.CourseManager;

@RestController
@CrossOrigin("*")
public class CourseController {
  
	@Autowired
	CourseManager manager;
	
	 @GetMapping(value = "api/courses")
	 public List<Course> showCourse()
	 {
		  return manager.getCourse(); 
		
	 }
	 
	 @GetMapping(value = "api/courses/{pid}")
	 public Optional<Course> getPro(@PathVariable int pid)
	 {
		Optional<Course> p=manager.getCourseId(pid);
		return p;
	 }
	 
	 @DeleteMapping(value = "api/courses/{pid}")
	 public void removepro(@PathVariable int pid)
	 {
		manager.delete(pid);
	 }
	 
	 @PostMapping(value = "api/courses")
	 public void addpro(@RequestBody Course f)
	 {
		manager.addCourse(f);
	 }
	 
	 @PutMapping(value = "api/courses/{pid}")
	 public void updatepro(@RequestBody Course c,@PathVariable int pid)
	 {
		System.out.println("inside updatepro of controller");
		manager.update(c,pid);
	 }
	
}
