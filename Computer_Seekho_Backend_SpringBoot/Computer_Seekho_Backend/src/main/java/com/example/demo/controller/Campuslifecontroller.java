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

import com.example.demo.entity.CampusLife;
import com.example.demo.service.Campuslifemanager;

@RestController
@RequestMapping("/api/campuslife")
@CrossOrigin("*")
public class Campuslifecontroller {

	@Autowired
	Campuslifemanager manager;
	
	@GetMapping(value = "/{id}")
	public Optional<CampusLife> getCampus(@PathVariable int id){
		return manager.getCampusLifeById(id);
	}
	
	@GetMapping
	public List<CampusLife> showCampusLife(){
		return manager.getAllCampusLife();
	}
	
	@DeleteMapping(value = "/{id}")
	public void removecam(@PathVariable int id) {
		manager.deleteCampusLifeById(id);
	}
	
	@PostMapping(value = "/")
	public void addcam(@RequestBody CampusLife c) {
		manager.UpdateCampusLife(c);
	}
	@PutMapping(value = "/{id}")
	public void update(@RequestBody CampusLife c,@PathVariable int id) {
		c.setCampusLifeId(id);
		manager.UpdateCampusLife(c);
	}
	
}
