package com.example.demo.controller;
import com.example.demo.entity.Duration;
import com.example.demo.service.DurationServiceImpl;

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

@RestController
@CrossOrigin("*")
public class DurationController {

	@Autowired
	private DurationServiceImpl durationservice;
	
	
	public DurationController(DurationServiceImpl durationService) {
	        this.durationservice = durationService;
	    }
	
	@PostMapping("api/duration")
	public void addduration(@RequestBody Duration duration)
	{
		
		 durationservice.addDuration(duration);
		
	}
	
	
	@GetMapping("api/duration/{duration_id}")
	public Optional<Duration> getDuration(@PathVariable int duration_id)
	{
		return durationservice.getDuration(duration_id);
		
	}
	
	@GetMapping("api/duration")
	public List<Duration> getallDuration()
	{
		return durationservice.getallDuration();
	}
	
	@PutMapping("api/duration/{id}")
	public void updateDuration(@PathVariable int id, @RequestBody Duration duration)
	{
		duration.setDuration_id(id);
		durationservice.updateDuration(duration);
	}
	
	@DeleteMapping("api/duration/{duration_id}")
	public void deleteDuration(@PathVariable int duration_id)
	{
		durationservice.deleteDuration(duration_id);
	}
	
	
	
}
