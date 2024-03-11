/**
 * 
 */
package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Closure")
public class Closure {

	private int Closure_Id;
	private String Closure_Reason;
	
	/**
	 * 
	 */
	public Closure() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * @param closure_Id
	 * @param closure_Reason
	 */
	public Closure(int closure_Id, String closure_Reason) {
		super();
		this.Closure_Id = closure_Id;
		this.Closure_Reason = closure_Reason;
	}
	
	/**
	 * @return the closure_Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getClosure_Id() {
		return Closure_Id;
	}

	/**
	 * @param closure_Id the closure_Id to set
	 */
	public void setClosure_Id(int closure_Id) {
		Closure_Id = closure_Id;
	}

	/**
	 * @return the closure_Reason
	 */
	public String getClosure_Reason() {
		return Closure_Reason;
	}

	/**
	 * @param closure_Reason the closure_Reason to set
	 */
	public void setClosure_Reason(String closure_Reason) {
		this.Closure_Reason = closure_Reason;
	}

	@Override
	public String toString() {
		return "Closure [Closure_Id=" + Closure_Id + ", Closure_Reason=" + Closure_Reason + "]";
	}
}
