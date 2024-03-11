package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Follow_up;
import com.example.demo.repository.Followup_repository;


@Service
public  class FollowupManagerImpl implements FollowupManager
{  
	@Autowired
	Followup_repository FU_repo;
	
	@Override
	public
	void addFollowup(Follow_up p)
	{
		FU_repo.save(p);
	}
	
	@Override
	 public void delete(int id)
	{
		FU_repo.deleteById(id);
		
	}
	
	@Override
	public
	List<Follow_up> getSelected( )
	{
		return FU_repo.findAll();
	}
	
	@Override
	public Optional<Follow_up> getFollowupId(int id)
	{
		return FU_repo.findById(id);
	}
	
	public void update(Follow_up follow_up, int id)
	{
		System.out.println("inside update method of service layer");
		FU_repo.update(follow_up.getEnquiry_id(),follow_up.getFollowup_Date(),follow_up.getNext_Followup_date(), follow_up.getStaff_id(),follow_up.getFollowup_Message(),follow_up.getAttempts(),id);
	}

	@Override
	public List<Follow_up> getListGroupByEnquiryId() {
		// TODO Auto-generated method stub
		return FU_repo.getListGroup();
	}

	
}
