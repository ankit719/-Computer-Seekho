package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Maintenance_Entity;
import com.example.demo.repository.Maintenance_Repository;

@Service
public class Maintenance_ManagerImpl implements Maintenance_Manager {


	@Autowired
	Maintenance_Repository repo;
	
	public void addEntity (Maintenance_Entity maintenance) {
		// TODO Auto-generated method stub
		repo.save(maintenance);
	}


	public void delete(int maintenance_id) {
		// TODO Auto-generated method stub
		 repo.deleteById(maintenance_id);
	}


	
	@Override
	public List<Maintenance_Entity> getAllMaintenance() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}


	@Override
	public void update(Maintenance_Entity m, int id) {
		// TODO Auto-generated method stub
		repo.update(m.getStaff_id(), m.getTable_name(), m.getRecord_id(), m.getChanging_date(), id);
	}


	@Override
	public Optional<Maintenance_Entity> getMaintenance(int maintenance_id) {
		// TODO Auto-generated method stub
		return repo.findById(maintenance_id);
	}

}
 