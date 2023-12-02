package com.csit321g2.vergara.Controller;

import com.csit321g2.vergara.Entity.ScoreEntity;
import com.csit321g2.vergara.Service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PostMapping
    public ResponseEntity<ScoreEntity> createScore(@RequestBody Map<String, Object> request) {
        int quizid = (int) request.get("quizid");
        int score = (int) request.get("score");

        ScoreEntity createdScore = scoreService.createScore(quizid, score);
        return new ResponseEntity<>(createdScore, HttpStatus.CREATED);
    }

    @GetMapping("/{scoreid}")
    public ResponseEntity<ScoreEntity> getScore(@PathVariable int scoreid) {
        ScoreEntity score = scoreService.getScore(scoreid);
        return new ResponseEntity<>(score, HttpStatus.OK);
    }

    @GetMapping("/getAllScores")
    public ResponseEntity<List<ScoreEntity>> getAllScores() {
        List<ScoreEntity> scores = scoreService.getAllScores();
        return new ResponseEntity<>(scores, HttpStatus.OK);
    }

    @PutMapping("/{scoreid}")
    public ResponseEntity<ScoreEntity> updateScore(@PathVariable int scoreid,
                                                  @RequestBody Map<String, Object> request) {
        int quizid = (int) request.get("quizid");
        int scoreValue = (int) request.get("score");

        ScoreEntity updatedScore = scoreService.updateScore(scoreid, quizid, scoreValue);
        return new ResponseEntity<>(updatedScore, HttpStatus.OK);
    }

    @DeleteMapping("/{scoreid}")
    public ResponseEntity<Void> deleteScore(@PathVariable int scoreid) {
        scoreService.deleteScore(scoreid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
