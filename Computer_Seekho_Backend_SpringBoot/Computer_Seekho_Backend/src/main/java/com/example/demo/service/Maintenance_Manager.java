package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Maintenance_Entity;

@Component
public interface Maintenance_Manager {
	
	void addEntity(Maintenance_Entity maintenance);
	List<Maintenance_Entity> getAllMaintenance();
	Optional<Maintenance_Entity> getMaintenance(int id);
	void delete(int maintenance_id);
	void update(Maintenance_Entity maintenance, int id	);

}
