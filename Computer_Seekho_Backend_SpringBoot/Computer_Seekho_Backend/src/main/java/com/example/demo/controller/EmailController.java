package com.example.demo.controller;
 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.EmailDetails;
import com.example.demo.service.EmailService;

@RestController
@CrossOrigin("*")
public class EmailController {
 
    @Autowired private EmailService emailService;
 
    
    @PostMapping("api/sendMail")
    public ResponseEntity <String> sendMail(@RequestBody EmailDetails details)
    {  	
    	System.out.println(details);    
        String status= emailService.sendSimpleMail(details);
        return ResponseEntity.ok (status);
    }
    
    /*  
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment( @RequestBody EmailDetails details)
    {
        String status= emailService.sendMailWithAttachment(details);
 
        return status;
    }*/
}