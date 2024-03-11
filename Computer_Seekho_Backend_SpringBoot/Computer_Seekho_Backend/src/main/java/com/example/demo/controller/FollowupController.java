package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.FollowupManager;
import com.example.demo.entity.Follow_up;

@RestController
@CrossOrigin("*")
public class FollowupController 
{
	@Autowired
	FollowupManager FU_manager;
	
	@GetMapping(value="api/Followup")
	public List<Follow_up> getSelected( )
	{
		return FU_manager.getSelected();
	}
	
   @DeleteMapping(value="api/Followup/{pid}")
   public void removepro(@PathVariable int pid)
   {
	   FU_manager.delete(pid);
   }
   
   @PostMapping(value="api/Followup")
   public void addpro(@RequestBody Follow_up Follow )
   {
	   FU_manager.addFollowup(Follow);
   }
   
   
   @GetMapping(value="api/Followup/{tid}")
	public Optional<Follow_up> getFollowupId(@PathVariable int tid)
	{
		return FU_manager.getFollowupId(tid);
	}
   
   @PutMapping(value = "api/Followup/{id}")
    public void updatepro(@RequestBody Follow_up follow_up,@PathVariable int id)
	{
		System.out.println("inside updatepro of controller");
		FU_manager.update(follow_up, id);
	}
		
   @GetMapping(value = "api/Followupenq")
	 public List<Follow_up> getListGroupByEnquiry()
	 {
		return FU_manager.getListGroupByEnquiryId();
	 }
	
}

