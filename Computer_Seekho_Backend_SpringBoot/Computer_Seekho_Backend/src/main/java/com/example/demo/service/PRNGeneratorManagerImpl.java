package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PRNGenerator;
import com.example.demo.repository.PRNGeneratorRepository;

@Service
public class PRNGeneratorManagerImpl implements PRNGeneratorManager {
	
	@Autowired
	PRNGeneratorRepository repository;

	@Override
	public void addPRNGen(PRNGenerator p) {
		// TODO Auto-generated method stub
		repository.save(p);
	}

	@Override
	public List<PRNGenerator> getprn() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void remove(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(PRNGenerator p, int id) {
		// TODO Auto-generated method stub
		repository.update(p.getStudent_Id(), id);
	}

	@Override
	public List<PRNGenerator> getById(int id) {
		// TODO Auto-generated method stub
		return repository.listId(id);
	}
	
}
