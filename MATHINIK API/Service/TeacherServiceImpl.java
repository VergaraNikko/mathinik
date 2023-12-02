package com.csit321g2.vergara.Service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.csit321g2.vergara.Entity.TeacherEntity;
import com.csit321g2.vergara.Entity.User;
import com.csit321g2.vergara.Repository.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private UserService userService;

    @Override
    public TeacherEntity createTeacher(int userid) {
        User user = userService.getUser(userid);
        TeacherEntity teacher = new TeacherEntity(userid, user);
        teacher.setUser(user);
        return teacherRepository.save(teacher);
    }

    @Override
    public TeacherEntity getTeacher(int teacherid) {
        return teacherRepository.findById(teacherid)
                .orElseThrow(() -> new EntityNotFoundException("Teacher not found"));
    }

    @Override
    public TeacherEntity updateTeacher(int teacherid, int userid) {
        TeacherEntity existingTeacher = getTeacher(teacherid);
        User user = userService.getUser(userid);
        existingTeacher.setUser(user);
        return teacherRepository.save(existingTeacher);
    }
    
    @Override
    public List<TeacherEntity> getAllTeachers() {
        return teacherRepository.findAll();
    }

    @Override
    public void deleteTeacher(int teacherid) {
        teacherRepository.deleteById(teacherid);
    }
}
