package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Course;
import com.example.demo.repository.CourseRepository;

@Service
public class CourseManagerImplimentation implements CourseManager{

	@Autowired
	CourseRepository repository;
	
	@Override
	public void addCourse(Course p) {
		repository.save(p);
		
	}

	@Override
	public List<Course> getCourse() {
		
		return repository.findAll();
	}
	
	@Override
	public Optional<Course> getCourseId(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	@Override
	public void delete(int id) {
		repository.deleteById(id);
		
	}


    @Override
	public void update(@RequestBody Course c,@PathVariable int id) {
		System.out.println("inside update method of service layer");
		//repository.updateCourse(c.getCourse_name(),c.getDuration_id(),c.getCapacity(),
		//c.getQualification_id(),c.getAge_group(),c.getDescription(),c.getSyallbus(),
		//c.getVideo(),c.getPhoto(),c.getIsactive(),id);
		 Course existingCourse = repository.findById(id).orElse(null);

	        // Check if the course with the given id exists
	        if (existingCourse != null) {
	            // Update the existing course with the new values
	            existingCourse.setCourse_name(c.getCourse_name());
	            existingCourse.setDuration(c.getDuration());
	            existingCourse.setCapacity(c.getCapacity());
	            existingCourse.setQualification(c.getQualification());
	            existingCourse.setAge_group(c.getAge_group());
	            existingCourse.setDescription(c.getDescription());
	            existingCourse.setSyallbus(c.getSyallbus());
	            existingCourse.setVideo(c.getVideo());
	            existingCourse.setPhoto(c.getPhoto());
	            existingCourse.setIsactive(c.getIsactive());
	            // Update other properties similarly

	            // Save the updated course
	            repository.save(existingCourse);
	        }
		
	}

}
