package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.LessonEntity;
import com.csit321g2.vergara.Entity.QuizEntity;
import com.csit321g2.vergara.Repository.LessonRepository;
import com.csit321g2.vergara.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private LessonRepository lessonRepository;

    @Override
    public QuizEntity createQuiz(int lessonid, String title) {
        LessonEntity lesson = lessonRepository.findById(lessonid)
                .orElseThrow(() -> new EntityNotFoundException("Lesson not found"));

        QuizEntity quiz = new QuizEntity();
        quiz.setLessonid(lesson);
        quiz.setTitle(title);

        return quizRepository.save(quiz);
    }

    @Override
    public QuizEntity getQuiz(int quizid) {
        return quizRepository.findById(quizid)
                .orElseThrow(() -> new EntityNotFoundException("Quiz not found"));
    }

    @Override
    public List<QuizEntity> getAllQuizzes() {
        return quizRepository.findAll();
    }

    @Override
    public QuizEntity updateQuiz(int quizid, int lessonid, String title) {
        QuizEntity existingQuiz = getQuiz(quizid);
        LessonEntity lesson = lessonRepository.findById(lessonid)
                .orElseThrow(() -> new EntityNotFoundException("Lesson not found"));

        existingQuiz.setLessonid(lesson);
        existingQuiz.setTitle(title);

        return quizRepository.save(existingQuiz);
    }

    @Override
    public void deleteQuiz(int quizid) {
        quizRepository.deleteById(quizid);
    }
}
