package com.example.demo.entity;

import java.sql.Date;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Follow_up")
@Component
public class Follow_up 
{
	private int Enquiry_id;
	private int Followup_id;
	private Date Followup_Date;
	private Date next_Followup_date;
	private int staff_id;
	private String Followup_Message;
	private int attempts;
	
	public Follow_up(int enquiry_id, int followup_id, Date followup_Date, Date next_Followup_date, int staff_id,
			String followup_Message, int attempts) {
		super();
		Enquiry_id = enquiry_id;
		Followup_id = followup_id;
		Followup_Date = followup_Date;
		this.next_Followup_date = next_Followup_date;
		this.staff_id = staff_id;
		Followup_Message = followup_Message;
		this.attempts = attempts;
	}

public int getAttempts() {
		return attempts;
	}

	public void setAttempts(int attempts) {
		this.attempts = attempts;
	}

public Follow_up() {
	super();
}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    public int getFollowup_id() {
		return Followup_id;
	}
	public void setFollowup_id(int followup_id) {
		Followup_id = followup_id;
	}
	
	
	public Date getNext_Followup_date() {
		return next_Followup_date;
	}

	public void setNext_Followup_date(Date next_Followup_date) {
		this.next_Followup_date = next_Followup_date;
	}


	public int getEnquiry_id() {
		return Enquiry_id;
	}
	public void setEnquiry_id(int enquiry_id) {
		Enquiry_id = enquiry_id;
	}
	
	
	
	public Date getFollowup_Date() {
		return Followup_Date;
	}
	public void setFollowup_Date(Date followup_Date) {
		Followup_Date = followup_Date;
	}
	
	
	public int getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	
	
	public String getFollowup_Message() {
		return Followup_Message;
	}
	public void setFollowup_Message(String followup_Message) {
		Followup_Message = followup_Message;
	}
	
	@Override
	public String toString() {
		return "Follow_up [Enquiry_id=" + Enquiry_id + ", Followup_id=" + Followup_id + ", Followup_Date="
				+ Followup_Date + ", next_Followup_date=" + next_Followup_date + ", staff_id=" + staff_id
				+ ", Followup_Message=" + Followup_Message + ", attempts=" + attempts + "]";
	}


}
