package com.csit321g2.vergara.Service;

import com.csit321g2.vergara.Entity.LessonEntity;
import com.csit321g2.vergara.Entity.TeacherEntity;
import com.csit321g2.vergara.Repository.LessonRepository;
import com.csit321g2.vergara.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class LessonServiceImpl implements LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public LessonEntity createLesson(int teacherid, String title, String description) {
        TeacherEntity teacher = teacherRepository.findById(teacherid)
                .orElseThrow(() -> new EntityNotFoundException("Teacher not found"));

        LessonEntity lesson = new LessonEntity();
        lesson.setTeacher(teacher);
        lesson.setTitle(title);
        lesson.setDescription(description);

        return lessonRepository.save(lesson);
    }

    @Override
    public LessonEntity getLesson(int lessonid) {
        return lessonRepository.findById(lessonid)
                .orElseThrow(() -> new EntityNotFoundException("Lesson not found"));
    }

    @Override
    public List<LessonEntity> getAllLessons() {
        return lessonRepository.findAll();
    }

    @Override
    public LessonEntity updateLesson(int lessonid, int teacherid, String title, String description) {
        LessonEntity existingLesson = getLesson(lessonid);
        TeacherEntity teacher = teacherRepository.findById(teacherid)
                .orElseThrow(() -> new EntityNotFoundException("Teacher not found"));

        existingLesson.setTeacher(teacher);
        existingLesson.setTitle(title);
        existingLesson.setDescription(description);

        return lessonRepository.save(existingLesson);
    }

    @Override
    public void deleteLesson(int lessonid) {
        lessonRepository.deleteById(lessonid);
    }
}

