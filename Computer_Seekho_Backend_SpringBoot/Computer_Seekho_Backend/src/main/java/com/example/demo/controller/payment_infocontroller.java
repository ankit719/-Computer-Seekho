package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.payment_info;
import com.example.demo.service.payment_infomanager;
@RestController

@CrossOrigin("*")
public class payment_infocontroller
{
	@Autowired
	payment_infomanager payment ;
	

	@DeleteMapping(value = "api/payment_info/{payment_infoId}")
	 public void removepro(@PathVariable int payment_infoId)
	 {
		payment.delete(payment_infoId);
	 }
	
	 @PutMapping(value = "api/payment_info/{payment_infoId}")
	 public void updatepro(@RequestBody payment_info payment_info1,@PathVariable int payment_infoId)
	 {
		payment_info1.setPayment_infoId(payment_infoId);
		payment.update(payment_info1);
	 }
	 
	 @PostMapping(value = "api/payment_info")
	 public void addpro(@RequestBody payment_info payment_info1)
	 {
		payment.addpayment(payment_info1);
	 }
	 @GetMapping(value = "api/payment_info")
	 public List<payment_info> getbyAll(){
		 return payment.getAllPayment();
	 }
	 
 	 @GetMapping(value="api/payment_info/{payment_infoid}")
 	 public Optional<payment_info> getpro(@PathVariable int payment_infoid)
	 {
		 return payment.getpayment(payment_infoid);
	 }
}
