package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.payment_info;

public interface payment_infomanager {
	void addpayment(payment_info p);
	void delete(int payment_infoid);
	void update(payment_info payment);
	Optional<payment_info> getpayment(int payment_infoid);
	List<payment_info> getAllPayment();
}
