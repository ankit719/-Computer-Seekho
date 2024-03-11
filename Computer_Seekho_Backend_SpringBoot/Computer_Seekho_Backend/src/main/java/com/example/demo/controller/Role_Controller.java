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
import com.example.demo.service.Role_Manager;	
import com.example.demo.entity.Role_Entity;

@RestController
@CrossOrigin("*")

public class Role_Controller {
	@Autowired
	Role_Manager manager;
	
	
	 
	 @DeleteMapping(value = "api/role/{role_id}")
	 public void delete(@PathVariable int role_id)
	 {
		manager.deleteById(role_id);
	 }
	 
	 @GetMapping(value = "api/role")
	 public List<Role_Entity> showEntity()
	 {
		  return manager.getAllEntity(); 
	 }
	 @GetMapping(value = "api/role/{role_id}")
	 public Optional<Role_Entity> showbyid(@PathVariable int role_id)
	 {
		  return manager.getRole_EntitbyId(role_id);
	 }
	 
	 @PutMapping(value = "api/role/{role_id}")	
	 public void updatepro(@RequestBody Role_Entity e,@PathVariable int role_id)
	 {
		System.out.println("inside updatepro of controller");
		manager.update(e);
	 }
	 
	 @PostMapping(value = "api/role")
	 public void addEntity(@RequestBody Role_Entity e)
	 {
		
		manager.addEntity(e);
	 }
}



