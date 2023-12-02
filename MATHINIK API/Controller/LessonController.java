package com.csit321g2.vergara.Controller;

import com.csit321g2.vergara.Entity.LessonEntity;
import com.csit321g2.vergara.Service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @PostMapping
    public ResponseEntity<LessonEntity> createLesson(@RequestBody Map<String, Object> request) {
        int teacherid = (int) request.get("teacherid");
        String title = (String) request.get("title");
        String description = (String) request.get("description");

        LessonEntity createdLesson = lessonService.createLesson(teacherid, title, description);
        return new ResponseEntity<>(createdLesson, HttpStatus.CREATED);
    }


    @GetMapping("/{lessonid}")
    public ResponseEntity<LessonEntity> getLesson(@PathVariable int lessonid) {
        LessonEntity lesson = lessonService.getLesson(lessonid);
        return new ResponseEntity<>(lesson, HttpStatus.OK);
    }

    @GetMapping("/getAllLessons")
    public ResponseEntity<List<LessonEntity>> getAllLessons() {
        List<LessonEntity> lessons = lessonService.getAllLessons();
        return new ResponseEntity<>(lessons, HttpStatus.OK);
    }

    @PutMapping("/{lessonid}")
    public ResponseEntity<LessonEntity> updateLesson(@PathVariable int lessonid,
                                                    @RequestBody Map<String, String> request) {
        int teacherid = Integer.parseInt(request.get("teacherid"));
        String title = request.get("title");
        String description = request.get("description");

        LessonEntity updatedLesson = lessonService.updateLesson(lessonid, teacherid, title, description);
        return new ResponseEntity<>(updatedLesson, HttpStatus.OK);
    }


    @DeleteMapping("/{lessonid}")
    public ResponseEntity<Void> deleteLesson(@PathVariable int lessonid) {
        lessonService.deleteLesson(lessonid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

