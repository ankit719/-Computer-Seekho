package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.PaymentServiceImpl;
import com.example.demo.entity.Payment;

@RestController
@CrossOrigin("*")
public class PaymentController {
	
	private PaymentServiceImpl paymentservice;

	
	
	public PaymentController(PaymentServiceImpl paymentservice) {
		super();
		this.paymentservice = paymentservice;
	}


	@PostMapping("api/payment")
	public void add_id(@RequestBody Payment payment)
	{
		 paymentservice.add_id(payment); //from service layer
		
	}
	
	@GetMapping("api/payment/{id}")
	public Optional<Payment> getStudent(@PathVariable int id)
	{
		return paymentservice.getStudent(id);
		
	}
	
	@PutMapping("api/payment/{id}")
	public String updatePayment(@PathVariable int id,@RequestBody Payment payment)
	{
		payment.setPayment_id(id);
		return paymentservice.updatePayment(payment);
	}
	
	
	@GetMapping("api/payment")
	public List<Payment> getallStudent()
	{
		return paymentservice.getallStudent();
	}
	@DeleteMapping("api/payment/{id}")
	public String delete_id(@PathVariable int id)
	{
		return paymentservice.delete(id);
	}
	@GetMapping("api/getpaymentdetail/{id}")
    public List<Payment> getPaymentStudent(@PathVariable int id) {
        return paymentservice.getPaymentStudent(id);
    }
	
}
