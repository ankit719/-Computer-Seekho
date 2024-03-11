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

import com.example.demo.entity.Location;
import com.example.demo.service.LocationManager;

@RestController
@CrossOrigin("*")
public class LocationController {
	
	@Autowired
	LocationManager manager;
	
	@GetMapping(value = "api/location")
	public List<Location> showLocations(){
		return manager.getLocation();
	}
	
	@GetMapping(value = "api/location/{id}")
	public List<Location> getById(@PathVariable int id){
		return manager.getById(id);
	}
	
	@DeleteMapping(value = "api/location/{id}")
	public void remove(@PathVariable int id) {
		manager.delete(id);
	}
	
	@PostMapping(value = "api/location")
	public void addLoc(@RequestBody Location l) {
		manager.addLocation(l);
	}
	
	@PutMapping(value = "api/location/{id}")
	public void updateloc(@RequestBody Location l, @PathVariable int id) {
		manager.update(l, id);
	}
}
