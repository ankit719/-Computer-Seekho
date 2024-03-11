package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Location;

@Component
public interface LocationManager {
	void addLocation(Location l);
	List<Location> getLocation();
	void delete(int id);
	void update(Location location, int id);
	List<Location> getById(int id);
}
