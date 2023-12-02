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
public class ScoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "scoreid")
    private int scoreid;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "quizid", nullable = false)
    private QuizEntity quiz;

    @Column(name = "score")
    private int score;

	public ScoreEntity(int scoreid, QuizEntity quiz, int score) {
		super();
		this.scoreid = scoreid;
		this.quiz = quiz;
		this.score = score;
	}

	public ScoreEntity () {
	   
	}

	public int getScoreid() {
		return scoreid;
	}

	public void setScoreid(int scoreid) {
		this.scoreid = scoreid;
	}

	public QuizEntity getQuiz() {
		return quiz;
	}

	public void setQuiz(QuizEntity quiz) {
		this.quiz = quiz;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}
	
	
}
