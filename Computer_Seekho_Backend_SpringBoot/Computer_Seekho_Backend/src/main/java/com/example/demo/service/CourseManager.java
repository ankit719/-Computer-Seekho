package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Course;

public interface CourseManager {
	void addCourse(Course p);
	List<Course> getCourse();
	void delete(int id);
	Optional<Course> getCourseId(int id);
	void update(@RequestBody Course c,@PathVariable int id);
}
