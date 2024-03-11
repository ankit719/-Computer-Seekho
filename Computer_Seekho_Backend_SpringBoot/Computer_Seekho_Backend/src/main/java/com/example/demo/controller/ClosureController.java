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

import com.example.demo.service.*;
import com.example.demo.entity.Closure;


@RestController
@CrossOrigin("*")
public class ClosureController {

	@Autowired
	ClosureManager manager;
	
	@GetMapping(value = "api/closure")
	public List<Closure> showLocation(){
		return manager.getClosure();
	}
	
	@GetMapping(value = "api/closure/{id}")
	public List<Closure> getById(@PathVariable int id){
		return manager.getById(id);
	}
	
	@PostMapping(value = "api/closure")
	public void addloc(@RequestBody Closure clo) {
		manager.addClosure(clo);
	}
	
	@DeleteMapping(value = "api/closure/{id}")
	public void removeloc(@PathVariable int id) {
		manager.delete(id);
	}
	
	@PutMapping(value = "api/closure/{id}")
	public void updatepro(@RequestBody Closure closure,@PathVariable int id){
		manager.update(closure, id);
	}
}
