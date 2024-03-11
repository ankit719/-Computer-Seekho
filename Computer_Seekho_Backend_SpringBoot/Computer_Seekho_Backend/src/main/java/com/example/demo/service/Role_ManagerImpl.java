package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Role_Entity;
import com.example.demo.repository.Role_Repository;

@Service
public class Role_ManagerImpl implements Role_Manager {
	
	@Autowired
	Role_Repository repo;

	


	@Override
	public void addEntity(Role_Entity e) {
		// TODO Auto-generated method stub
		repo.save(e);
		
	}

	
	
	@Override
	public void deleteById(int role_id) {
		// TODO Auto-generated method stub
		 repo.deleteById(role_id);
	}

	

	

	@Override
	public List<Role_Entity> getAllEntity() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	

	@Override
	public Role_Entity update(Role_Entity entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}

	@Override
	public Optional<Role_Entity> getRole_EntitbyId(int role_id) {
		// TODO Auto-generated method stub
		return repo.findById(role_id);
	}

}
