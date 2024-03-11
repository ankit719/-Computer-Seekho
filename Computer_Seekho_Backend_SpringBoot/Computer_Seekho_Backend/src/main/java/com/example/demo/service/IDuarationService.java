package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Duration;

public interface IDuarationService {
	
	void addDuration(Duration duration);
	void addDurations(List<Duration> durations);
	
	Optional<Duration> getDuration(int id);
	List<Duration> getallDuration();
	
	void deleteDuration(int id);
	void updateDuration(Duration duration);
	
	

}
