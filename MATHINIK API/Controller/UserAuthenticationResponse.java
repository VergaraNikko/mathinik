package com.csit321g2.vergara.Controller;

import com.csit321g2.vergara.Entity.User;

public class UserAuthenticationResponse {
	private User user;
    private String status;
    
    
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
