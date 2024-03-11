package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.payment_info;
import com.example.demo.repository.payment_inforepository;

@Service
public class payment_infomanagerimpl implements payment_infomanager
{
	@Autowired
	payment_inforepository repository;

	public void addpayment(payment_info p) {
		repository.save(p);
		
		
	}

	public void delete(int payment_infoid) {
		repository.deleteById(payment_infoid);
	}


	@Override
	public Optional<payment_info> getpayment(int payment_infoid) {
		// TODO Auto-generated method stub
		return repository.findById(payment_infoid);
	}

	@Override
	public void update(payment_info payment) {
		// TODO Auto-generated method stub
	repository.save(payment);
	}

	@Override
	public List<payment_info> getAllPayment() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	
	
	

}
