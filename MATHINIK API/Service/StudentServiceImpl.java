package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.StudentEntity; // Import the correct class
import com.csit321g2.vergara.Entity.User;
import com.csit321g2.vergara.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private UserService userService;

    @Override
    public StudentEntity createStudent(int userid) {
        User user = userService.getUser(userid);
        StudentEntity student = new StudentEntity(userid, user); 
        student.setUser(user);
        return studentRepository.save(student);
    }

    @Override
    public StudentEntity getStudent(int studentid) {
        return studentRepository.findById(studentid)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
    }
    @Override
    public List<StudentEntity> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public StudentEntity updateStudent(int studentid, int userid) {
        StudentEntity existingStudent = getStudent(studentid);
        User user = userService.getUser(userid);
        existingStudent.setUser(user);
        return studentRepository.save(existingStudent);
    }

    @Override
    public void deleteStudent(int studentid) {
        studentRepository.deleteById(studentid);
    }
    
}
