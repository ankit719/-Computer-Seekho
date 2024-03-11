package com.example.demo.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Payment;
import com.example.demo.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements IPaymentService{

	@Autowired
	private PaymentRepository dao;

	@Override
	public void add_id(Payment payment)
	{
		dao.save(payment);
		
	}
	
	@Override
	public String delete(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
		return "successfully deleted"+id;
	}

	@Override
	public Optional<Payment> getStudent(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	@Override
	public List<Payment> getallStudent() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public String updatePayment(Payment payment) {
		
		 dao.save(payment);
		 return "Successfully updated";
	}
	@Override
	public List<Payment> getPaymentStudent(int studentId) {
        return dao.getPaymentStudentRepo(studentId);
    }
	
}
