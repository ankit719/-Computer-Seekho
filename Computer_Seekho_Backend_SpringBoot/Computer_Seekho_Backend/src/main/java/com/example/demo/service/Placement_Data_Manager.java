package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Placement_Data;

@Component
public interface Placement_Data_Manager 
{
	void addPlace(Placement_Data p1);
	List<Placement_Data> getPlacementData();
	void remove(int id);
	void update(Placement_Data placement,int id);
	Optional<Placement_Data> getPlacementbyId(int pid);
}
