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
import com.example.demo.service.Maintenance_Manager;
import com.example.demo.entity.Maintenance_Entity;

@RestController
@CrossOrigin("*")
public class Maintenance_Controller {

	@Autowired
	Maintenance_Manager manager;
	
	
	 @PostMapping(value = "api/maintenance")
	 public void addEntity(@RequestBody Maintenance_Entity maintenance)
	 {
		System.out.println("addpro called");
		manager.addEntity(maintenance);
	 }
	 
	@DeleteMapping(value = "api/maintenance/{maintenance_id}")
	 public void delete(@PathVariable int maintenance_id)
	 {
		manager.delete(maintenance_id);
	 }
	
	 @PutMapping(value = "api/maintenance/{maintenance_id}")	
	 public void updatepro(@RequestBody Maintenance_Entity entity,@PathVariable int maintenance_id)
	 {
		System.out.println("inside updatepro of controller");
		manager.update(entity, maintenance_id);
	 }
	 @GetMapping(value = "api/maintenance")
	 public List<Maintenance_Entity> getAllMaintenance()
	 {
		  return manager.getAllMaintenance(); 
	 }
	 @GetMapping(value = "api/maintenance/{id}")
	 public Optional<Maintenance_Entity> showMaintenance(@PathVariable int id)
	 {
		  return manager.getMaintenance(id);
	 }
}
