package com.example.demo.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Faculty;

import com.example.demo.service.FacultyManager;

@RestController
@CrossOrigin("*")

public class FacultyController {

	@Autowired
	FacultyManager manager;
	
	 @GetMapping(value = "api/staff")
	 public List<Faculty> showFaculty()
	 {
		  return manager.getFaculty(); 
		
	 }
	 
	 @GetMapping(value = "api/staff/{pid}")
	 public Optional<Faculty> getPro(@PathVariable int pid)
	 {
		Optional<Faculty> p=manager.getFaculty(pid);
		return p;
	 }
	 
	 @DeleteMapping(value = "api/staff/{pid}")
	 public void removepro(@PathVariable int pid)
	 {
		manager.delete(pid);
	 }
	 
	 @PutMapping(value="api/staff/{pid}")
	 public void updatepro(@RequestBody Faculty f,@PathVariable int pid)
	 {
		System.out.println("inside updatepro of controller");
		manager.update(f,pid);
	 }
	 
	 @PostMapping(value = "api/login")
	 public Optional<Faculty> logInpro(@RequestBody Faculty f ) {
		 Optional<Faculty> p= manager.logIn(f);
		 return p;
	 }
	 
	 @PostMapping(value = "api/staff")
	 public void addpro(@RequestBody Faculty f)
	 {
		manager.addFaculty(f);
	 }
}
