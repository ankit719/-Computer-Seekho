package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
	@Table(name = "CAMPUS_LIFE")
	
	public class CampusLife{

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "Campus_Life_Id")
	    private int campusLifeId;

	    @Column(name = "Photo")
	    private String photo;

	    public int getCampusLifeId() {
			return campusLifeId;
		}

		public void setCampusLifeId(int campusLifeId) {
			this.campusLifeId = campusLifeId;
		}

		public String getPhoto() {
			return photo;
		}

		public void setPhoto(String photo) {
			this.photo = photo;
		}

		public int getBatchId() {
			return batchId;
		}

		public void setBatchId(int batchId) {
			this.batchId = batchId;
		}

		public int getStaffId() {
			return staffId;
		}

		public void setStaffId(int staffId) {
			this.staffId = staffId;
		}

		public String getVideo() {
			return video;
		}

		public void setVideo(String video) {
			this.video = video;
		}

		@Column(name = "Batch_Id")
	    private int batchId;

	    @Column(name = "Staff_Id", nullable = false)
	    private int staffId;

	    @Column(name = "Video")
	    private String video;
	}


