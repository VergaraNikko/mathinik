package com.csit321g2.vergara.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;



import javax.persistence.JoinColumn;

@Entity
public class TeacherEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int teacherid;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "userid")
    private User user;

    
    public TeacherEntity(int teacherid, User user) {
		super();
		this.teacherid = teacherid;
		this.user = user;
	}

    public  TeacherEntity() {
        
    }
	public int getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(int teacherid) {
        this.teacherid = teacherid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
