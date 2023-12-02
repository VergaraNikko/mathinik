package com.csit321g2.vergara.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity

public class QuizEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quizid")
    private int quizid;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "lessonid", nullable = false)
    private LessonEntity lessonid;

    @Column(name = "title")
    private String title;

	public QuizEntity(int quizid, LessonEntity lessonid, String title) {
		super();
		this.quizid = quizid;
		this.lessonid = lessonid;
		this.title = title;
	}

    public QuizEntity() {
    	
    }

	public int getQuizid() {
		return quizid;
	}

	public void setQuizid(int quizid) {
		this.quizid = quizid;
	}

	public LessonEntity getLessonid() {
		return lessonid;
	}

	public void setLessonid(LessonEntity lessonid) {
		this.lessonid = lessonid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
    
    
}

