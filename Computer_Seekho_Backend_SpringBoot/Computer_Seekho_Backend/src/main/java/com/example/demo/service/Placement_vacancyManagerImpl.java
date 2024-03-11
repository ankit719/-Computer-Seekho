package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Placement_vacancy;
import com.example.demo.repository.Placement_vacancyRepository;

@Service
public class Placement_vacancyManagerImpl implements Placement_vacancyManager
{
	@Autowired
	 Placement_vacancyRepository repository;

	@Override
	public List<Placement_vacancy> getPlacement_vacancy() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}
	
	@Override
	public Optional<Placement_vacancy> getPlacement_vacancy(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}
	
	@Override
	public void addPlacement_vacancy(Placement_vacancy p) {
		// TODO Auto-generated method stub
		repository.save(p);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Placement_vacancy placement_vacancy, int id) {
		// TODO Auto-generated method stub
		repository.save(placement_vacancy);
	}

}
