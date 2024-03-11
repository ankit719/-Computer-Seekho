package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Company;

public interface CompanyManager {

	void addCompany(Company p);
	List<Company> getCompany();
	void delete(int id);
	void update(Company company,int id);
	Optional<Company> getComapayId( int id);
}
