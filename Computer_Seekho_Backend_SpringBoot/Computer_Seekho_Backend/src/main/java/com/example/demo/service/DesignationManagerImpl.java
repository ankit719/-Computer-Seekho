package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Designation;
import com.example.demo.repository.DesignationRepository;

@Service
public class DesignationManagerImpl implements DesignationManager {
	
	@Autowired
	DesignationRepository repository;
	
	@Override
	public void addDesig(Designation d) {
		// TODO Auto-generated method stub
		repository.save(d);		
	}

	@Override
	public List<Designation> getDesignation() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Designation designation, int id) {
		// TODO Auto-generated method stub
		repository.update(designation.getDesignation(), id);
	}

	@Override
	public List<Designation> getById(int id) {
		// TODO Auto-generated method stub
		return repository.listId(id);
	}

}
