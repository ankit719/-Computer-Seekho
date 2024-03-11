package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Duration")
public class Duration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int duration_id;

@Column
private String duration;

public Duration(){
	
}


public int getDuration_id() {
	return duration_id;
}

public void setDuration_id(int duration_id) {
	this.duration_id = duration_id;
}

public String getDuration() {
	return duration;
}

public void setDuration(String duration) {
	this.duration = duration;
}


@Override
public String toString() {
	return "Duration [duration_id=" + duration_id + ", duration=" + duration + "]";
}


}
