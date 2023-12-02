package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.ScoreEntity;

import java.util.List;

public interface ScoreService {
    ScoreEntity createScore(int quizid, int score);
    ScoreEntity getScore(int scoreid);
    List<ScoreEntity> getAllScores();
    ScoreEntity updateScore(int scoreid, int quizid, int score);
    void deleteScore(int scoreid);
}
	