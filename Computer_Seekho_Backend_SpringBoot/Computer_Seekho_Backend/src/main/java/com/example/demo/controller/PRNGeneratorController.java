package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.demo.entity.PRNGenerator;
import com.example.demo.service.PRNGeneratorManager;

@RestController
@CrossOrigin("*")
public class PRNGeneratorController {
	@Autowired
	PRNGeneratorManager manager;
	
	@GetMapping(value="/api/prngen")
	public List<PRNGenerator> getAll(){
		return manager.getprn();	
	}
	
	@GetMapping(value="/api/prngen/{id}")
	public List<PRNGenerator> getById(@PathVariable int id){
		return manager.getById(id);
	}
	
	@PostMapping(value="/api/prngen")
	public void addRec(@RequestBody PRNGenerator p) {
		manager.addPRNGen(p);
	}
	
	@DeleteMapping(value="/api/prngen/{id}")
	public void delete(@PathVariable int id) {
		manager.remove(id);
	}
	
	@PutMapping(value="/api/prngen/{id}")
	public void update(@RequestBody PRNGenerator p,@PathVariable int id) {
		manager.update(p, id);
	}
}
