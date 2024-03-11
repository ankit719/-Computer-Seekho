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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.Placement_Data_Manager;
import com.example.demo.entity.Placement_Data;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "api/placement")
public class Placement_Data_Controller {
	
	@Autowired
	Placement_Data_Manager manager;
	
	@GetMapping
	 public List<Placement_Data> showPlacement()
	 {
		 return manager.getPlacementData();
	 }
	 
	 
	 @GetMapping("/{pid}")
	 public Optional<Placement_Data> getplacmentbyid(@PathVariable int pid)
	 {
		 return manager.getPlacementbyId(pid);
	 }
	 
	 
	 
	@DeleteMapping(value = "/{pid}")
	 public void delete(@PathVariable int pid)
	 {
		manager.remove(pid);
	 }
	 
	 
	 @PostMapping
	 public void addPlacement(@RequestBody Placement_Data p1)
	 {
		 manager.addPlace(p1);
	 }
	 
	 @PutMapping(value = "/{id}")
	 public void updatepl(@RequestBody Placement_Data p, @PathVariable int id) {
		 manager.update(p, id);
	 }
}
