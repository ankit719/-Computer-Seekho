package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.payment_info;

@Repository
public interface payment_inforepository extends JpaRepository<payment_info,Integer> 
{
	
}
