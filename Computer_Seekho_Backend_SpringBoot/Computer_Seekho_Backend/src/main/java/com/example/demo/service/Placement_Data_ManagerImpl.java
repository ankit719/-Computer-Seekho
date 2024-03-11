package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Placement_Data;
import com.example.demo.repository.Placement_Data_Repository;

@Service
public class Placement_Data_ManagerImpl implements Placement_Data_Manager {
	
	@Autowired
	Placement_Data_Repository repository;

	@Override
	public void addPlace(Placement_Data p1) {
		// TODO Auto-generated method stub
		repository.save(p1);
	}

	@Override
	public List<Placement_Data> getPlacementData() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void remove(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Placement_Data placement, int id) {
		// TODO Auto-generated method stub
		repository.update(placement.getP_Id(), placement.getPRN(),placement.getCompany_Id(), placement.getDesignation(), placement.getBatch_Id(), placement.getStatus(), id);
	}

	@Override
	public Optional<Placement_Data> getPlacementbyId(int pid) {
		// TODO Auto-generated method stub
		return repository.findById(pid);
	}

}
