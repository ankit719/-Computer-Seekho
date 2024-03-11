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

import com.example.demo.service.Placement_vacancyManager;
import com.example.demo.entity.Placement_vacancy;


@RestController
@CrossOrigin("*")
public class Placement_vacancyController
{
	@Autowired
	Placement_vacancyManager manager;
	
	 @GetMapping(value = "api/Placement_vacancy")
	 public List<Placement_vacancy> showPlacement_vacancy()
	 {
		  return manager.getPlacement_vacancy(); 
		
	 }
	
	 @GetMapping(value = "api/Placement_vacancyById/{pid}")
	 public Optional<Placement_vacancy> getPlacement_vacancy(@PathVariable int pid)
	 {
		Optional<Placement_vacancy> p=manager.getPlacement_vacancy(pid);
		return p;
	 }

	 @DeleteMapping(value = "api/DeletePlacement_vacancy/{pid}")
	 public void removePlacement_vacancy(@PathVariable int pid)
	 {
		manager.delete(pid);
	 }
	 
	 @PostMapping(value = "api/AddPlacement_vacancy")
	 public void updatePlacement_vacancy(@RequestBody Placement_vacancy placement_vacancy )
	 {
		System.out.println("addPlacement_vacancy called");
		
		manager.addPlacement_vacancy(placement_vacancy);
	 }

	 @PutMapping(value = "api/UpdatePlacement_vacancy/{pid}")
	 public void updatePlacement_vacancy(@RequestBody Placement_vacancy placement_vacancy,@PathVariable int pid)
	 {
		System.out.println("inside updatepro of controller");
		placement_vacancy.setP_id(pid);
		manager.update(placement_vacancy,pid);
	 }
	
}
