package com.csit321g2.vergara.Controller;

import com.csit321g2.vergara.Entity.QuestionEntity;
import com.csit321g2.vergara.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    public ResponseEntity<QuestionEntity> createQuestion(@RequestBody Map<String, String> request) {
        int quizid = Integer.parseInt(request.get("quizid"));
        String text = request.get("text");

        QuestionEntity createdQuestion = questionService.createQuestion(quizid, text);
        return new ResponseEntity<>(createdQuestion, HttpStatus.CREATED);
    }

    @GetMapping("/{questionid}")
    public ResponseEntity<QuestionEntity> getQuestion(@PathVariable int questionid) {
        QuestionEntity question = questionService.getQuestion(questionid);
        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @GetMapping("/getAllQuestions")
    public ResponseEntity<List<QuestionEntity>> getAllQuestions() {
        List<QuestionEntity> questions = questionService.getAllQuestions();
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @PutMapping("/{questionid}")
    public ResponseEntity<QuestionEntity> updateQuestion(@PathVariable int questionid,
                                                        @RequestBody Map<String, String> request) {
        int quizid = Integer.parseInt(request.get("quizid"));
        String text = request.get("text");

        QuestionEntity updatedQuestion = questionService.updateQuestion(questionid, quizid, text);
        return new ResponseEntity<>(updatedQuestion, HttpStatus.OK);
    }
    @DeleteMapping("/{questionid}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable int questionid) {
        questionService.deleteQuestion(questionid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    
}
