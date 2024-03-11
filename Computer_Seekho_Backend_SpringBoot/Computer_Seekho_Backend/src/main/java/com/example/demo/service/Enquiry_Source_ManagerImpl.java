package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Enquiry_Source;
import com.example.demo.repository.Enquiry_Source_Repository;

@Service
public class Enquiry_Source_ManagerImpl implements Enquiry_Source_Manager {
	
	@Autowired
	Enquiry_Source_Repository repository;

	@Override
	public void addEnquiry_Source(Enquiry_Source p) {
		// TODO Auto-generated method stub
		System.out.println(p.toString());
		repository.save(p);
		
	}

	@Override
	public List<Enquiry_Source> getEnquiry_Source() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Enquiry_Source c, int id) {
		// TODO Auto-generated method stub
		repository.update1(id,c.getEnquiry_Source());
	}

	@Override
	public List<Enquiry_Source> getById(int id) {
		// TODO Auto-generated method stub
		return repository.listId(id);
	}

}
