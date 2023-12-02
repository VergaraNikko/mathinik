package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.AnswerEntity;
import com.csit321g2.vergara.Entity.QuestionEntity;
import com.csit321g2.vergara.Repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private QuestionService questionService;

    @Override
    public AnswerEntity createAnswer(int questionid, String text) {
        QuestionEntity question = questionService.getQuestion(questionid);
        AnswerEntity answer = new AnswerEntity();
        answer.setQuestion(question);
        answer.setText(text);
        return answerRepository.save(answer);
    }

    @Override
    public AnswerEntity getAnswer(int answerid) {
        return answerRepository.findById(answerid)
                .orElseThrow(() -> new EntityNotFoundException("Answer not found"));
    }

    @Override
    public List<AnswerEntity> getAllAnswers() {
        return answerRepository.findAll();
    }

    @Override
    public AnswerEntity updateAnswer(int answerid, int questionid, String text) {
        AnswerEntity existingAnswer = getAnswer(answerid);
        QuestionEntity question = questionService.getQuestion(questionid);
        existingAnswer.setQuestion(question);
        existingAnswer.setText(text);
        return answerRepository.save(existingAnswer);
    }

    @Override
    public void deleteAnswer(int answerid) {
        answerRepository.deleteById(answerid);
    }
}
