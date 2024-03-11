package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.CampusLife;

public interface Campuslifemanager {
	
	CampusLife UpdateCampusLife(CampusLife CampusLife);

    List<CampusLife> getAllCampusLife();

    Optional<CampusLife> getCampusLifeById(int id);

	void deleteCampusLifeById(int campusLifeId);

	
}
