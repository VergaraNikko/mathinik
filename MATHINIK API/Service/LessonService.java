package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.LessonEntity;

import java.util.List;

public interface LessonService {
	
    LessonEntity createLesson(int teacherid, String title, String description);
    LessonEntity getLesson(int lessonid);
    List<LessonEntity> getAllLessons();
    LessonEntity updateLesson(int lessonid, int teacherid, String title, String description);
    void deleteLesson(int lessonid);
    
}
