package com.csit321g2.Olbenario.Service;

import com.csit321g2.Olbenario.Entity.LessonEntity;

import java.util.List;

public interface LessonService {
	
    LessonEntity createLesson(int userid, String title, String description, String content);
    LessonEntity getLesson(int lessonid);
    List<LessonEntity> getAllLessons();
    LessonEntity updateLesson(int lessonid, int userid, String title, String description, String content);
    void deleteLesson(int lessonid);
    
}
