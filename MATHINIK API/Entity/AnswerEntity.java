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

public class AnswerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerid;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "questionid", nullable = false)
    private QuestionEntity question;

    @Column(nullable = false)
    private String text;

	public AnswerEntity(int answerid, QuestionEntity question, String text) {
		super();
		this.answerid = answerid;
		this.question = question;
		this.text = text;
	}

    public AnswerEntity () {
    	
    }

	public int getAnswerid() {
		return answerid;
	}

	public void setAnswerid(int answerid) {
		this.answerid = answerid;
	}

	public QuestionEntity getQuestion() {
		return question;
	}

	public void setQuestion(QuestionEntity question) {
		this.question = question;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
    
    
}
