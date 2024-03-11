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

import com.example.demo.service.QualificationManager;
import com.example.demo.entity.Qualification;


@RestController  
@CrossOrigin("*")
public class QualificationController {

	@Autowired
	QualificationManager manager;
	

	 @GetMapping(value = "api/Qualification")
	 public List<Qualification> showProducts1()
	 {
		  return manager.getQualification(); 
		
	 }
	
	 @GetMapping(value = "api/Qualification/{pid}")
	 public Optional<Qualification> getPro(@PathVariable int pid)
	 {
		Optional<Qualification> p=manager.getQualification(pid);
		return p;
	 }

	 @DeleteMapping(value = "api/Qualification/{pid}")
	 public void removepro(@PathVariable int pid)
	 {
		manager.delete(pid);
	 }
	 
	 @PutMapping(value = "api/Qualification/{pid}")
	 public void updatepro(@RequestBody Qualification qualification,@PathVariable int pid)
	 {
		System.out.println("inside updatepro of controller");
		qualification.setQualification_id(pid);
		manager.update(qualification,pid);
	 }
	 
	 @PostMapping(value = "api/Qualification")
	 public void updatepro(@RequestBody Qualification qualification)
	 {
		System.out.println("updatepro called");
		manager.updateQualification(qualification);
	 }

}
