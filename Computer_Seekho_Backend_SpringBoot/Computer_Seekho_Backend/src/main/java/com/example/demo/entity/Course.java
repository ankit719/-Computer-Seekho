package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="course")
public class Course {
   
	private int course_id;
	private String course_name;
	private String duration;
	private int capacity;
	private String qualification;
	private String age_group;
	private String description;
	private String syllabus;
	private String video;
	private String photo;
	private String isactive;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getCourse_id() {
		return course_id;
	}
	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getAge_group() {
		return age_group;
	}
	public void setAge_group(String age_group) {
		this.age_group = age_group;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSyallbus() {
		return syllabus;
	}
	public void setSyallbus(String syallbus) {
		this.syllabus = syallbus;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public String getPhoto() {
		return photo;
	}
	public Course() {
		super();
	}
	public Course(int course_id, String course_name, String duration, int capacity, String qualification, String age_group,
			String description, String syllabus, String video, String photo, String isactive) {
		super();
		this.course_id = course_id;
		this.course_name = course_name;
		this.duration = duration;
		this.capacity = capacity;
		this.qualification = qualification;
		this.age_group = age_group;
		this.description = description;
		this.syllabus = syllabus;
		this.video = video;
		this.photo = photo;
		this.isactive = isactive;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getIsactive() {
		return isactive;
	}
	public void setIsactive(String isactive) {
		this.isactive = isactive;
	}
	
	
}
