package com.example.demo.service;
import com.example.demo.repository.BatchRepository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Batch;

@Service
public class Batchmanagerimpl implements Batchmanager{

	  
	    @Autowired
	    BatchRepository batchRepository1;

	    @Override
	    public void addBatch(Batch batch) {
	        batchRepository1.save(batch);
	    }

	    @Override
	    public void deleteBatch(int batchId) {
	        batchRepository1.deleteById(batchId);
	    }

	    
	    public void updateBatch(String batch,int batchId,Date batchYear,String batchLogo,Date startDate,Date endDate,int courseId,Date finalPresentation_Date,String Cover_Photo) {
			// TODO Auto-generated method stub
			System.out.println("inside update method of service layer");
			batchRepository1.updateBatch(batch,batchYear,batchLogo,startDate,endDate,courseId,finalPresentation_Date,Cover_Photo,batchId);
		}

	   
	    @Override
	    public Optional<Batch> getBatchById1(int batchId) {
	        return batchRepository1.findById(batchId);
	    }

	    @Override
	    public List<Batch> getAllBatches() {
	        return batchRepository1.findAll();
	    }

		
		public List<Batch> getBatchbydate(Date d) {
			
			return batchRepository1.findbydate(d);
		}
	}