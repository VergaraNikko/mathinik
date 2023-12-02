package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.QuizEntity;

import java.util.List;

public interface QuizService {
    QuizEntity createQuiz(int lessonid, String title);
    QuizEntity getQuiz(int quizid);
    List<QuizEntity> getAllQuizzes();
    QuizEntity updateQuiz(int quizid, int lessonid, String title);
    void deleteQuiz(int quizid);
}
