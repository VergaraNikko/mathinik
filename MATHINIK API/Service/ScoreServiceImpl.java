package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.QuizEntity;
import com.csit321g2.vergara.Entity.ScoreEntity;
import com.csit321g2.vergara.Repository.QuizRepository;
import com.csit321g2.vergara.Repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public ScoreEntity createScore(int quizid, int score) {
        QuizEntity quiz = quizRepository.findById(quizid)
                .orElseThrow(() -> new EntityNotFoundException("Quiz not found"));

        ScoreEntity scoreEntity = new ScoreEntity();
        scoreEntity.setQuiz(quiz);
        scoreEntity.setScore(score);

        return scoreRepository.save(scoreEntity);
    }

    @Override
    public ScoreEntity getScore(int scoreid) {
        return scoreRepository.findById(scoreid)
                .orElseThrow(() -> new EntityNotFoundException("Score not found"));
    }

    @Override
    public List<ScoreEntity> getAllScores() {
        return scoreRepository.findAll();
    }

    @Override
    public ScoreEntity updateScore(int scoreid, int quizid, int score) {
        ScoreEntity existingScore = getScore(scoreid);
        QuizEntity quiz = quizRepository.findById(quizid)
                .orElseThrow(() -> new EntityNotFoundException("Quiz not found"));

        existingScore.setQuiz(quiz);
        existingScore.setScore(score);

        return scoreRepository.save(existingScore);
    }

    @Override
    public void deleteScore(int scoreid) {
        scoreRepository.deleteById(scoreid);
    }
}
