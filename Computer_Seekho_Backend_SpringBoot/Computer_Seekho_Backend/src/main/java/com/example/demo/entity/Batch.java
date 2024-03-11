package com.example.demo.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

	@Entity
	@Table(name = "BATCH")
	public class Batch {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "Batch_Id")
	    private int batchId;

	    @Column(name = "Batch_Name")
	    private String batchName;

	    @Column(name = "Batch_Year")
	    private Date batchYear;

	    @Column(name = "Batch_Logo")
	    private String batchLogo;

	    @Column(name = "Start_date")
	    private Date startDate;

	    @Column(name = "End_date")
	    private Date endDate;

	    
	    @Column(name = "Course_Id")
	    private int courseId;

	   

	    @Column(name = "Final_Presentation_Date")
	    private Date finalPresentationDate;

	    @Column(name = "Cover_Photo")
	    private String coverPhoto;

		public int getBatchId() {
			return batchId;
		}

		public void setBatchId(int batchId) {
			this.batchId = batchId;
		}

		public String getBatchName() {
			return batchName;
		}

		public void setBatchName(String batchName) {
			this.batchName = batchName;
		}

		public Date getBatchYear() {
			return batchYear;
		}

		public void setBatchYear(Date batchYear) {
			this.batchYear = batchYear;
		}

		public String getBatchLogo() {
			return batchLogo;
		}

		public void setBatchLogo(String batchLogo) {
			this.batchLogo = batchLogo;
		}

		public Date getStartDate() {
			return startDate;
		}

		public void setStartDate(Date startDate) {
			this.startDate = startDate;
		}

		public Date getEndDate() {
			return endDate;
		}

		public void setEndDate(Date endDate) {
			this.endDate = endDate;
		}

		public int getCourseId() {
			return courseId;
		}

		public void setCourseId(int courseId) {
			this.courseId = courseId;
		}

		

		public Date getFinalPresentationDate() {
			return finalPresentationDate;
		}

		public void setFinalPresentationDate(Date finalPresentationDate) {
			this.finalPresentationDate = finalPresentationDate;
		}

		public String getCoverPhoto() {
			return coverPhoto;
		}

		public void setCoverPhoto(String coverPhoto) {
			this.coverPhoto = coverPhoto;
		}


}
