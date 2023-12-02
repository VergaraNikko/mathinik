package com.csit321g2.vergara.Controller;

import com.csit321g2.vergara.Entity.QuizEntity;
import com.csit321g2.vergara.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/quizzes")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping
    public ResponseEntity<QuizEntity> createQuiz(@RequestBody Map<String, Object> request) {
        int lessonid = (int) request.get("lessonid");
        String title = (String) request.get("title");

        QuizEntity createdQuiz = quizService.createQuiz(lessonid, title);
        return new ResponseEntity<>(createdQuiz, HttpStatus.CREATED);
    }


    @GetMapping("/{quizid}")
    public ResponseEntity<QuizEntity> getQuiz(@PathVariable int quizid) {
        QuizEntity quiz = quizService.getQuiz(quizid);
        return new ResponseEntity<>(quiz, HttpStatus.OK);
    }

    @GetMapping("/getAllQuizzes")
    public ResponseEntity<List<QuizEntity>> getAllQuizzes() {
        List<QuizEntity> quizzes = quizService.getAllQuizzes();
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    @PutMapping("/{quizid}")
    public ResponseEntity<QuizEntity> updateQuiz(@PathVariable int quizid,
                                                 @RequestBody Map<String, String> request) {
        int lessonid = Integer.parseInt(request.get("lessonid"));
        String title = request.get("title");

        QuizEntity updatedQuiz = quizService.updateQuiz(quizid, lessonid, title);
        return new ResponseEntity<>(updatedQuiz, HttpStatus.OK);
    }



    @DeleteMapping("/{quizid}")
    public ResponseEntity<Void> deleteQuiz(@PathVariable int quizid) {
        quizService.deleteQuiz(quizid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
