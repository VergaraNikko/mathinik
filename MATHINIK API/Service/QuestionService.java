package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.QuestionEntity;

import java.util.List;

public interface QuestionService {

    QuestionEntity createQuestion(int quizid, String text);

    QuestionEntity getQuestion(int questionid);

    List<QuestionEntity> getAllQuestions();

    QuestionEntity updateQuestion(int questionid, int quizid, String text);

    void deleteQuestion(int questionid);

    
}
