package com.csit321g2.vergara.Controller;

public class UserAuthenticationRequest {
    private final String username;
    private final String password;

    public UserAuthenticationRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
		return username;
	}
    
    public String getPassword() {
		return password;
	}
    
}
