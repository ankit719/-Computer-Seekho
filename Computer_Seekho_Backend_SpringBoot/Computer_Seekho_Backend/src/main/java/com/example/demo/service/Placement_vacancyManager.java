package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Component;
import com.example.demo.entity.Placement_vacancy;

@Component
public interface Placement_vacancyManager
{
	void addPlacement_vacancy(Placement_vacancy p);
	List<Placement_vacancy> getPlacement_vacancy();
	void delete(int id);
	void update(Placement_vacancy placement_vacancy,int id);
	Optional<Placement_vacancy> getPlacement_vacancy(int id);
	
	
}
