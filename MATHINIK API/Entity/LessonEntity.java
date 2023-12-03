package com.csit321g2.Olbenario.Entity;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "lesson")
public class LessonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int lessonid;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "userid", nullable = false)
     private User user;

    private String title;
    
    private String description;
    
    private String content;

	
    public LessonEntity() {
    	
    }


	public LessonEntity(int lessonid, User user, String title, String description, String content) {
		super();
		this.lessonid = lessonid;
		this.user = user;
		this.title = title;
		this.description = description;
		this.content = content;
	}


	public int getLessonid() {
		return lessonid;
	}


	public void setLessonid(int lessonid) {
		this.lessonid = lessonid;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}

	
    
}
