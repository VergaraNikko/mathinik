package com.csit321g2.Olbenario.Controller;

import com.csit321g2.Olbenario.Entity.LessonEntity;
import com.csit321g2.Olbenario.Service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @PostMapping
    public ResponseEntity<LessonEntity> createLesson(@RequestBody Map<String, Object> request) {
        int userid = (int) request.get("userid");
        String title = (String) request.get("title");
        String description = (String) request.get("description");
        String content = (String) request.get("content");

        LessonEntity createdLesson = lessonService.createLesson(userid, title, description, content);
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
        int userid = Integer.parseInt(request.get("userid"));
        String title = request.get("title");
        String description = request.get("description");
        String content = request.get("content");

        LessonEntity updatedLesson = lessonService.updateLesson(lessonid, userid, title, description, content);
        return new ResponseEntity<>(updatedLesson, HttpStatus.OK);
    }


    @DeleteMapping("/{lessonid}")
    public ResponseEntity<Void> deleteLesson(@PathVariable int lessonid) {
        lessonService.deleteLesson(lessonid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

