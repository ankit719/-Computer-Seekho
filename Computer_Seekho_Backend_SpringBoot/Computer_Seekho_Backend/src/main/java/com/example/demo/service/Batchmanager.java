package com.example.demo.service;

import java.sql.Date;
import java.util.List;

import java.util.Optional;



import com.example.demo.entity.Batch;

public interface Batchmanager {
	
	    void addBatch(Batch batch);
	    void deleteBatch(int batchId);
	    void updateBatch(String batch,int batchId,Date date,String string,Date endDate,Date date2,int i,Date date3, String string2);
	    
	    List<Batch> getAllBatches();
		Optional<Batch> getBatchById1(int batchId);
		List<Batch> getBatchbydate(Date d);
	}


