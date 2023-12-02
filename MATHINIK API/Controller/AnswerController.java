package com.csit321g2.vergara.Controller;

import com.csit321g2.vergara.Entity.AnswerEntity;
import com.csit321g2.vergara.Service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping
    public ResponseEntity<AnswerEntity> createAnswer(@RequestBody Map<String, String> request) {
        int questionid = Integer.parseInt(request.get("questionid"));
        String text = request.get("text");
        AnswerEntity createdAnswer = answerService.createAnswer(questionid, text);
        return new ResponseEntity<>(createdAnswer, HttpStatus.CREATED);
    }

    @GetMapping("/{answerid}")
    public ResponseEntity<AnswerEntity> getAnswer(@PathVariable int answerid) {
        AnswerEntity answer = answerService.getAnswer(answerid);
        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping("/getAllAnswers")
    public ResponseEntity<List<AnswerEntity>> getAllAnswers() {
        List<AnswerEntity> answers = answerService.getAllAnswers();
        return new ResponseEntity<>(answers, HttpStatus.OK);
    }

    @PutMapping("/{answerid}")
    public ResponseEntity<AnswerEntity> updateAnswer(@PathVariable int answerid,
                                                    @RequestBody Map<String, String> request) {
        int questionid = Integer.parseInt(request.get("questionid"));
        String text = request.get("text");
        AnswerEntity updatedAnswer = answerService.updateAnswer(answerid, questionid, text);
        return new ResponseEntity<>(updatedAnswer, HttpStatus.OK);
    }

    @DeleteMapping("/{answerid}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable int answerid) {
        answerService.deleteAnswer(answerid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
