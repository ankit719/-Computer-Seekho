package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment_info") // Replace with your actual table name
public class payment_info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Payment_infoId")
    private int payment_infoId;

    @Column(name = "Payment_method_Description")
    private String paymentMethodDescription;

    // Constructors

    public payment_info() {
        // Default constructor required by JPA
    	super();
    }

    public payment_info(String paymentMethodDescription) {
    	super();
        this.paymentMethodDescription = paymentMethodDescription;
    }

  

    public int getPayment_infoId() {
        return payment_infoId;
    }

    public void setPayment_infoId(int payment_infoId) {
        this.payment_infoId = payment_infoId;
    }

    public String getPaymentMethodDescription() {
        return paymentMethodDescription;
    }

    public void setPaymentMethodDescription(String paymentMethodDescription) {
        this.paymentMethodDescription = paymentMethodDescription;
    }



    @Override
    public String toString() {
        return "Payment{" + "payment_infoId=" + payment_infoId + ", paymentMethodDescription='" + paymentMethodDescription + '\'' + '}';
    }
}


