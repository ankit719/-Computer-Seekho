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
import com.example.demo.service.BatchInfo_Manager;
import com.example.demo.entity.BatchInfo_Entity;
@RestController
@CrossOrigin("*")
public class BatchInfo_Controller {
	@Autowired
	BatchInfo_Manager manager;

	 @DeleteMapping(value="api/batchinfo/{id}")
	 public void delete(@PathVariable int id)
	 {
		manager.remove(id);
	 }
	 
	 @PutMapping(value = "api/batchinfo/{id}")	
	 public void updatepro(@RequestBody BatchInfo_Entity batch,@PathVariable int id)
	 {
		System.out.println("inside updatepro of controller");
		manager.update(batch ,id);
	 }
	 
	 @PostMapping(value = "api/batchinfo")
	 public void addEntity(@RequestBody BatchInfo_Entity batch)
	 {
		System.out.println("addpro called");
		System.out.println(batch.getStaff_Id());
		manager.addEntity(batch);
	 }
	 @GetMapping(value = "api/batchinfo")
	 public List<BatchInfo_Entity> showBatchInfo_Entity()
	 {
		 System.out.println("inside get");
		  return manager.getBatchInfo_Entity(); 
		
	 }
	 @GetMapping(value="api/batchinfo/{id}")
	 public Optional<BatchInfo_Entity> getBatchInfobyId(@PathVariable int id){
		return manager.getBatchInfobyId(id);
		 
	 }
	 
}
