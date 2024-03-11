package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Qualification;
import com.example.demo.repository.QualificationRepository;



@Service
public class QualificationManagerImpl implements QualificationManager 
{
	@Autowired
	QualificationRepository repository;

	@Override
	public void addQualification(Qualification p) {
		// TODO Auto-generated method stub
		repository.save(p);
	}

	@Override
	public List<Qualification> getQualification() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}


	@Override
	public Optional<Qualification> getQualification(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	

	@Override
	public void update(Qualification qualification, int id) {
		repository.save(qualification);
		
	}

	@Override
	public void updateQualification(Qualification qualification) {
		// TODO Auto-generated method stub
		repository.save(qualification);
	}

	 

//	@Override
//	public void update(Qualification qualification, int id) {
//		// TODO Auto-generated method stub
//		
//	}
	

}
