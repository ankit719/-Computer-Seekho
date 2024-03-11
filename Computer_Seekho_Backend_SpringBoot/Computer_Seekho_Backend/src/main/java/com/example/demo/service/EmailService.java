package com.example.demo.service;

import com.example.demo.entity.EmailDetails;

public interface EmailService {

	 // To send a simple email
    String sendSimpleMail(EmailDetails details);
    
    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
    
}