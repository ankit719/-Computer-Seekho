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

import com.example.demo.entity.Company;
import com.example.demo.service.CompanyManager;

@RestController
@CrossOrigin("*")
public class CompanyController {

	@Autowired
	CompanyManager manager;
	

	 @GetMapping(value = "api/companys")
	 public List<Company> showCompany()
	 {
		 System.out.println("inside get");
		  return manager.getCompany(); 
		
	 }
	 
	 @GetMapping(value = "api/companys/{id}")
	 public Optional<Company> getComapanyById(@PathVariable int id){
		 Optional<Company> p= manager.getComapayId(id);
		 return p;
	 }
	 
	 @DeleteMapping(value = "api/companys/{pid}")
	 public void removepro(@PathVariable int pid)
	 {
		 System.out.println("inside delete comp");
		manager.delete(pid);
	 }
	 
	 @PostMapping(value = "api/companys")
	 public void addpro(@RequestBody Company f)
	 {
		manager.addCompany(f);
	 }
	 @PutMapping(value = "api/companys/{pid}")
	 public void updatepro(@RequestBody Company c,@PathVariable int pid)
	 {
		System.out.println("inside updatepro of controller");
		manager.update(c,pid);
	 }
}
