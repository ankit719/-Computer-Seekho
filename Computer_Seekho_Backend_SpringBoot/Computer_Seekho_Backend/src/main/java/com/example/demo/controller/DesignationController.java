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

import com.example.demo.entity.Designation;
import com.example.demo.service.DesignationManager;

@RestController
@CrossOrigin("*")
public class DesignationController {
	
	@Autowired
	DesignationManager manager;
	
	@GetMapping(value = "api/designation")
	public List<Designation> showDesig(){
		return manager.getDesignation();
	}
	
	@GetMapping(value = "api/designation/{id}")
	 public List<Designation> getById(@PathVariable int id)
	 {
		return manager.getById(id);
	 }
	
	@DeleteMapping(value = "api/designation/{id}")
	public void remove(@PathVariable int id) {
		manager.delete(id);
	}
	
	@PostMapping(value = "api/designation")
	public void addDesig(@RequestBody Designation d) {
		manager.addDesig(d);
	}
	
	@PutMapping(value = "api/designation/{id}")
	public void updatepro(@RequestBody Designation d, @PathVariable int id) {
		manager.update(d, id);
	}
}
