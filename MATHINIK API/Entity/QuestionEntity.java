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

public class QuestionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "questionid")
    private int questionid;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "quizid")
    private QuizEntity quiz;

    @Column(name = "text")
    private String text;

	public QuestionEntity(int questionid, QuizEntity quiz, String text) {
		super();
		this.questionid = questionid;
		this.quiz = quiz;
		this.text = text;
	}

   public QuestionEntity () {
	   
   }

   public int getQuestionid() {
	   return questionid;
   }

   public void setQuestionid(int questionid) {
	   this.questionid = questionid;
   }

   public QuizEntity getQuiz() {
	   return quiz;
   }

   public void setQuiz(QuizEntity quiz) {
	   this.quiz = quiz;
   }

   public String getText() {
	   return text;
   }

   public void setText(String text) {
	   this.text = text;
   }
    
}
