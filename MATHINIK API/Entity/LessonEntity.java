package com.csit321g2.vergara.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
    @Column(name = "lessonid")
    private int lessonid;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "teacherid", nullable = false)
    private TeacherEntity teacher;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

	public LessonEntity(int lessonid, TeacherEntity teacher, String title, String description) {
		super();
		this.lessonid = lessonid;
		this.teacher = teacher;
		this.title = title;
		this.description = description;
	}

    public LessonEntity() {
    	
    }

	public int getLessonId() {
		return lessonid;
	}

	public void setLessonId(int lessonid) {
		this.lessonid = lessonid;
	}

	public TeacherEntity getTeacher() {
		return teacher;
	}

	public void setTeacher(TeacherEntity teacher) {
		this.teacher = teacher;
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
    
    
}

