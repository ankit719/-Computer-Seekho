package com.example.demo.entity;

import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Payment")
public class Payment{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payment_id;
	private int student_id;
	private String transaction_id;
	private Date date;
	private double amount;
	private int batch_id;
	private int payment_type_id;
	
	public Payment()
	{
		
	}

	public Payment(int payment_id, int student_id, String transaction_id, Date date, double amount, int batch_id,
			int payment_type_id) {
		super();
		this.payment_id = payment_id;
		this.student_id = student_id;
		this.transaction_id = transaction_id;
		this.date = date;
		this.amount = amount;
		this.batch_id = batch_id;
		this.payment_type_id = payment_type_id;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public String getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public int getBatch_id() {
		return batch_id;
	}

	public void setBatch_id(int batch_id) {
		this.batch_id = batch_id;
	}

	public int getPayment_type_id() {
		return payment_type_id;
	}

	public void setPayment_type_id(int payment_type_id) {
		this.payment_type_id = payment_type_id;
	}

}
