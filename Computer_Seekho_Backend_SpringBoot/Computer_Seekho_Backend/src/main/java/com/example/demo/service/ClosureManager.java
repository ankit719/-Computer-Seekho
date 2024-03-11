package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.entity.*;

@Component
public interface ClosureManager {
	void addClosure(Closure p);
	List<Closure> getClosure();
	void delete(int id);
	void update(Closure closure,int id);
	List<Closure> getById(int id);
}
