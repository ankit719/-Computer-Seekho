package com.example.demo.service;
import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.CampusLife;
import com.example.demo.repository.CampusLifeRepository;


	@Service
	public class Campuslifeimpl implements Campuslifemanager {
		@Autowired
		CampusLifeRepository campusLifeRepository;

	    public Campuslifeimpl(CampusLifeRepository campusLifeRepository) {
	        this.campusLifeRepository = campusLifeRepository;
	    }

	    @Override
	    public CampusLife UpdateCampusLife(CampusLife campusLifeEntity) {
	    	
	        return campusLifeRepository.save(campusLifeEntity);
	    }

	    @Override
	    public List<CampusLife> getAllCampusLife() {
	        return campusLifeRepository.findAll();
	    }

	   
	    public Optional<CampusLife> getCampusLifeById(int campusLifeId) {
	        
	        return campusLifeRepository.findById(campusLifeId);
	    }

		@Override
		public void deleteCampusLifeById(int campusLifeId) {
			// TODO Auto-generated method stub
			campusLifeRepository.deleteById(campusLifeId);
			
		}

	   

}
