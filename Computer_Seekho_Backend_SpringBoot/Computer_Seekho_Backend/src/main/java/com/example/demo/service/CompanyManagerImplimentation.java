package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Company;
import com.example.demo.repository.CompanyRepository;

@Service
public class CompanyManagerImplimentation implements CompanyManager {

	@Autowired
	CompanyRepository repository;
	
	@Override
	public void addCompany(Company p) {
		
		repository.save(p);
	}

	@Override
	public List<Company> getCompany() {
		System.out.println("inside manager imp");
		return repository.findAll();
	}

	@Override
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
		
	}

	@Override
	public void update(@RequestBody Company c,@PathVariable int id) {
		System.out.println("inside update method of service layer");
		repository.update(c.getCompany_name(),c.getLogo(),c.getLocation(),c.getTotal_placement(),id);
		
	}
	
	@Override
	public Optional<Company> getComapayId( int id) {
		 return repository.findById(id);
		    
	}

}
