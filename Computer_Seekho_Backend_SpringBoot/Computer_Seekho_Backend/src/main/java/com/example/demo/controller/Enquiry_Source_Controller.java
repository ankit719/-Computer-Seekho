package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Enquiry_Source;
import com.example.demo.service.Enquiry_Source_Manager;


@RestController
@CrossOrigin("*")
public class Enquiry_Source_Controller {
	
	@Autowired
	Enquiry_Source_Manager manager;
	
	@GetMapping(value = "api/enquirysrc")
	public List<Enquiry_Source> showEnquiry(){
		return manager.getEnquiry_Source();
	}
	
	@GetMapping(value = "api/enquirysrc/{id}")
	public List<Enquiry_Source> getById(@PathVariable int id){
		return manager.getById(id);
	}
	
	@DeleteMapping(value = "api/enquirysrc/{id}")
	public void remove(@PathVariable int id) {
		manager.delete(id);
	}
	
	@PostMapping(value = "api/enquirysrc")
	public void add(@RequestBody Enquiry_Source e) {
		manager.addEnquiry_Source(e);
	}
	@PutMapping(value = "api/enquirysrc/{id}")
	public void update(@RequestBody Enquiry_Source c, @PathVariable int id) {
		manager.update(c, id);
	}
}
