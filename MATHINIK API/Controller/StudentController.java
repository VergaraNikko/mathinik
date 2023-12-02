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

import com.csit321g2.vergara.Entity.StudentEntity;
import com.csit321g2.vergara.Service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public ResponseEntity<StudentEntity> createStudent(@RequestBody Map<String, String> request) {
        int userid = Integer.parseInt(request.get("userid"));
        StudentEntity createdStudent = studentService.createStudent(userid);
        return new ResponseEntity<>(createdStudent, HttpStatus.CREATED);
    }
    
    @GetMapping("/getAllStudents")
	public List<StudentEntity> getAllStudents(){
		return studentService.getAllStudents();
	}

    @GetMapping("/{studentid}")
    public ResponseEntity<StudentEntity> getStudent(@PathVariable int studentid) {
        StudentEntity student = studentService.getStudent(studentid);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @PutMapping("/{studentid}")
    public ResponseEntity<StudentEntity> updateStudent(@PathVariable int studentid, @RequestParam int userid) {
        StudentEntity updatedStudent = studentService.updateStudent(studentid, userid);
        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
    }

    @DeleteMapping("/{studentid}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int studentid) {
        studentService.deleteStudent(studentid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

