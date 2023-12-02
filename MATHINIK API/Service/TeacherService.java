package com.csit321g2.vergara.Service;

import java.util.List;


import com.csit321g2.vergara.Entity.TeacherEntity;

public interface TeacherService {
	 TeacherEntity createTeacher(int userid);
	    TeacherEntity getTeacher(int teacherid);
	    TeacherEntity updateTeacher(int teacherid, int userid);
	    void deleteTeacher(int teacherid);
	    List<TeacherEntity> getAllTeachers();
}
