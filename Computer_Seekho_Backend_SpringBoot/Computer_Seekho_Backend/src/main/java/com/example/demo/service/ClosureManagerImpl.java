package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Closure;
import com.example.demo.repository.ClosureRepository;

@Service
public class ClosureManagerImpl implements ClosureManager {
	
	@Autowired
	ClosureRepository repository;

	
	@Override
	public void addClosure(Closure p) {
		// TODO Auto-generated method stub
		repository.save(p);
	}

	@Override
	public List<Closure> getClosure() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Closure closure, int id) {
		// TODO Auto-generated method stub
		repository.update(closure.getClosure_Reason(), id);
	}

	@Override
	public List<Closure> getById(int id) {
		// TODO Auto-generated method stub
		return repository.listId(id);
	}
	
}
