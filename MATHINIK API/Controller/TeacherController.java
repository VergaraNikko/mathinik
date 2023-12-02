package com.csit321g2.vergara.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.csit321g2.vergara.Entity.TeacherEntity;
import com.csit321g2.vergara.Service.TeacherService;

@RestController
@RequestMapping("/teachers")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping
    public ResponseEntity<TeacherEntity> createTeacher(@RequestBody Map<String, String> request) {
        int userid = Integer.parseInt(request.get("userid"));
        TeacherEntity createdTeacher = teacherService.createTeacher(userid);
        return new ResponseEntity<>(createdTeacher, HttpStatus.CREATED);
    }
    
    @GetMapping("/getAllTeachers")
   	public List<TeacherEntity> getAllTeachers(){
   		return teacherService.getAllTeachers();
   	}

    @GetMapping("/{teacherid}")
    public ResponseEntity<TeacherEntity> getTeacher(@PathVariable int teacherid) {
    	TeacherEntity teacher = teacherService.getTeacher(teacherid);
        return new ResponseEntity<>(teacher, HttpStatus.OK);
    }

    @PutMapping("/{teacherid}")
    public ResponseEntity<TeacherEntity> updateTeacher(@PathVariable int teacherid, @RequestParam int userid) {
    	TeacherEntity updatedTeacher = teacherService.updateTeacher(teacherid, userid);
        return new ResponseEntity<>(updatedTeacher, HttpStatus.OK);
    }

    @DeleteMapping("/{teacherid}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable int teacherid) {
        teacherService.deleteTeacher(teacherid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

