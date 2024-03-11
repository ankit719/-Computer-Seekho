package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.DurationRepository;
//import com.example.demo.controller.*;
import com.example.demo.entity.*;
//import com.example.demo.service.*;


@Service
public class DurationServiceImpl implements IDuarationService {
	
	@Autowired
	private DurationRepository dao;
	
	//Create duration
	@Override
	public void addDuration(Duration duration)
	{
		dao.save(duration);
	
	}
	
	//create multiple duration
	@Override
	public void addDurations(List<Duration> durations)
	{
		dao.saveAll(durations);
	
	}
	
	//delete duration
	@Override
	public void deleteDuration(int duration_id)
	{
		
		dao.deleteById(duration_id);
		
	}
	
	
	//find duration by id
	@Override
	public Optional<Duration> getDuration(int duration_id)
	{
		return dao.findById(duration_id);
		
	}
	
	//find all 
	@Override
	public List<Duration> getallDuration() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}
	
	//update duration
	@Override
	public void updateDuration(Duration duration)
	{
		
		dao.save(duration);
		
	}

	

}
