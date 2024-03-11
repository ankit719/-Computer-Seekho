package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.demo.entity.BatchInfo_Entity;


@Component
public interface BatchInfo_Manager {
	
	void addEntity(BatchInfo_Entity batch);
	void remove(int id);
	void update(BatchInfo_Entity batch, int id);
	List<BatchInfo_Entity> getBatchInfo_Entity();
	Optional<BatchInfo_Entity> getBatchInfobyId(int id);
}
