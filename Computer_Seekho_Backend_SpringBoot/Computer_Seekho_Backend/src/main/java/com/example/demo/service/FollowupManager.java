package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Follow_up;

@Component
public interface FollowupManager
{
	
Optional<Follow_up> getFollowupId(int id);
	
	
void addFollowup(Follow_up p);
void delete(int id);
List<Follow_up> getSelected( );
void update(Follow_up follow_up ,int id);
List<Follow_up> getListGroupByEnquiryId();
}