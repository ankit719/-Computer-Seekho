package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.entity.PRNGenerator;

@Component
public interface PRNGeneratorManager {
	void addPRNGen(PRNGenerator p);
	List<PRNGenerator> getprn();
	void remove(int id);
	void update(PRNGenerator p, int id);
	List<PRNGenerator> getById(int id);
}
