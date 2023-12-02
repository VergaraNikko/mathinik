package com.csit321g2.vergara.Service;

import java.util.List;

import com.csit321g2.vergara.Entity.StudentEntity;

public interface StudentService {
	    StudentEntity createStudent(int userid);
	    StudentEntity getStudent(int studentid);
	    StudentEntity updateStudent(int studentid, int userid);
	    void deleteStudent(int studentid);
		List<StudentEntity> getAllStudents();
}
