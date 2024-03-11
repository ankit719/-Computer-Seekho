package com.example.demo.service;


import java.util.*;

import com.example.demo.entity.Payment;

public interface IPaymentService {
	
		void add_id(Payment payment);
		Optional<Payment> getStudent(int id);
		String delete(int id);
		List<Payment> getallStudent();
		String updatePayment(Payment payment);
		List<Payment> getPaymentStudent(int studentId);
}
