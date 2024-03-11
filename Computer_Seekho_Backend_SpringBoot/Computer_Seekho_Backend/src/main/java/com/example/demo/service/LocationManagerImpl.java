package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Location;
import com.example.demo.repository.LocationRepository;

@Service
public class LocationManagerImpl implements LocationManager {
	
	@Autowired
	LocationRepository repository;

	@Override
	public void addLocation(Location l) {
		// TODO Auto-generated method stub
		repository.save(l);
	}

	@Override
	public List<Location> getLocation() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Location location, int id) {
		// TODO Auto-generated method stub
		repository.updateLocation(id, location.getCity(), location.getCountry(), location.getLandmark(), location.getPincode());
	}

	@Override
	public List<Location> getById(int id) {
		// TODO Auto-generated method stub
		return repository.listId(id);
	}
	
}
