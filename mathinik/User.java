package com.csit321g2.vergara.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;




	
	// User Entity

	@Entity
	
	public class User {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int userid;

	    private String username;
	    private String email;
	    private String password;
	    private String usertype;
		
	    
	    public User(int userid, String username, String email, String password, String usertype) {
			super();
			this.userid = userid;
			this.username = username;
			this.email = email;
			this.password = password;
			this.usertype = usertype;
		}
	    
	    public  User() {
	        
	    }


		public int getUserid() {
			return userid;
		}


		public void setUserid(int userid) {
			this.userid = userid;
		}


		public String getUsername() {
			return username;
		}


		public void setUsername(String username) {
			this.username = username;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;	
		}

		public String getUsertype() {
			return usertype;
		}

		public void setUserType(String userType) {
			this.usertype = userType;
		}

	    
	}


