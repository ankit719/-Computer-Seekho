package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Role_Entity;

	//@Component
public interface Role_Manager {

	void addEntity(Role_Entity e);
	List<Role_Entity> getAllEntity();
	void deleteById(int role_id);
	Role_Entity update(Role_Entity entity);
	Optional<Role_Entity>getRole_EntitbyId(int role_id);
	
}
