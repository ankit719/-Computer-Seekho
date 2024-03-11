package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.BatchInfo_Entity;
import com.example.demo.repository.BatchInfo_Repository;

@Service
public class BatchInfo_ManagerImpl implements BatchInfo_Manager  {
	
	@Autowired
	BatchInfo_Repository repository;
	
	@Override
	public void addEntity(BatchInfo_Entity batch)
	{
		repository.save(batch);
	}
	@Override
	public void remove(int id)
	{
		repository.deleteById(id);
	}
	
	@Override
	public void update(BatchInfo_Entity batch, int id)
	{
		repository.update(batch.getBatchId(),batch.getStaff_Id(),batch.getSubject(),id);
	}
	
	@Override
	public List<BatchInfo_Entity> getBatchInfo_Entity() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}
	@Override
	public Optional<BatchInfo_Entity> getBatchInfobyId(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}
}
