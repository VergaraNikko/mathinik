package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.QuestionEntity;
import com.csit321g2.vergara.Entity.QuizEntity;
import com.csit321g2.vergara.Repository.QuestionRepository;
import com.csit321g2.vergara.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public QuestionEntity createQuestion(int quizid, String text) {
        QuizEntity quiz = quizRepository.findById(quizid)
                .orElseThrow(() -> new EntityNotFoundException("Quiz not found"));

        QuestionEntity question = new QuestionEntity();
        question.setQuiz(quiz);
        question.setText(text);

        return questionRepository.save(question);
    }

    @Override
    public QuestionEntity getQuestion(int questionid) {
        return questionRepository.findById(questionid)
                .orElseThrow(() -> new EntityNotFoundException("Question not found"));
    }

    @Override
    public List<QuestionEntity> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public QuestionEntity updateQuestion(int questionid, int quizid, String text) {
        QuestionEntity existingQuestion = getQuestion(questionid);
        QuizEntity quiz = quizRepository.findById(quizid)
                .orElseThrow(() -> new EntityNotFoundException("Quiz not found"));

        existingQuestion.setQuiz(quiz);
        existingQuestion.setText(text);

        return questionRepository.save(existingQuestion);
    }

    @Override
    public void deleteQuestion(int questionid) {
        questionRepository.deleteById(questionid);
    }

    
}
