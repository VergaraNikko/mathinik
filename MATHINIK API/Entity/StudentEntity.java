package com.csit321g2.vergara.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;



import javax.persistence.JoinColumn;

@Entity
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentid;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "userid")
    private User user;

    
    public StudentEntity(int studentid, User user) {
		super();
		this.studentid = studentid;
		this.user = user;
	}
    
    public  StudentEntity() {
       
    }
    
    
    public int getStudentid() {
        return studentid;
    }

    public void setStudentid(int studentid) {
        this.studentid = studentid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
