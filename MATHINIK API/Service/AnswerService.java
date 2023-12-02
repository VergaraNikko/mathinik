package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.AnswerEntity;

import java.util.List;

public interface AnswerService {
    AnswerEntity createAnswer(int questionid, String text);
    AnswerEntity getAnswer(int answerid);
    List<AnswerEntity> getAllAnswers();
    AnswerEntity updateAnswer(int answerid, int questionid, String text);
    void deleteAnswer(int answerid);
}
