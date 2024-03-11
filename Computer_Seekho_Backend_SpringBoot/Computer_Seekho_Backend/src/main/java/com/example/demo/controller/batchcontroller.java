package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Batch;
import com.example.demo.service.Batchmanager;

import java.sql.Date;
import java.util.List;
	import java.util.Optional;

	@RestController
	@RequestMapping("/api/batches")
	@CrossOrigin("*")
	

	public class batchcontroller {

	    @Autowired
	    private Batchmanager batchmanager;

	    @PostMapping
	    public void addBatch(@RequestBody Batch batch) {
	        batchmanager.addBatch(batch);
	    }

	 
	    @GetMapping(value = "/{batchId}")
		 public Optional<Batch> getPro(@PathVariable int batchId)
		 {
			Optional<Batch> B=batchmanager.getBatchById1(batchId);
			return B;
		 }

	    @GetMapping
	    public List<Batch> getAllBatches() {
	    	System.out.println("getmarrpping");
	        return batchmanager.getAllBatches();
	    }

    @GetMapping("?date=2024-02-12")
	    public List<Batch> getAllBatchesbydate(@PathVariable Date date) {
    	System.out.println("sgfb");
	    	return batchmanager.getBatchbydate(date);
	       
   }
	    
	    
	    @PutMapping(value = "/{batchId}")
		 public void updatepro(@RequestBody Batch batch,@PathVariable int batchId)
		 {
			System.out.println("inside updatepro of controller");
			batchmanager.updateBatch(batch.getBatchName(),batchId,batch.getBatchYear(),batch.getBatchLogo(),batch.getStartDate(),batch.getEndDate(),batch.getCourseId(),batch.getFinalPresentationDate(),batch.getCoverPhoto());
		 }
	   
	        @DeleteMapping(value = "/{batchId}")
	   	 public void removepro(@PathVariable int batchId)
	   	 {
	        	batchmanager.deleteBatch(batchId);
	   	 }
	    }
	
	

