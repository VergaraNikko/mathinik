package com.csit321g2.Olbenario.Service;

import com.csit321g2.Olbenario.Entity.LessonEntity;
import com.csit321g2.Olbenario.Entity.User;
import com.csit321g2.Olbenario.Repository.LessonRepository;
import com.csit321g2.Olbenario.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;


@Service
public class LessonServiceImpl implements LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public LessonEntity createLesson(int userid, String title, String description, String content) {
        User user = userRepository.findById(userid)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        LessonEntity lesson = new LessonEntity();
        lesson.setUser(user);
        lesson.setTitle(title);
        lesson.setDescription(description);
        lesson.setContent(content);

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
    public LessonEntity updateLesson(int lessonid, int userid, String title, String description, String content) {
        LessonEntity existingLesson = getLesson(lessonid);
        User user = userRepository.findById(userid)
                .orElseThrow(() -> new EntityNotFoundException("Teacher not found"));

        existingLesson.setUser(user);
        existingLesson.setTitle(title);
        existingLesson.setDescription(description);
        existingLesson.setContent(content);

        return lessonRepository.save(existingLesson);
    }

    @Override
    public void deleteLesson(int lessonid) {
        lessonRepository.deleteById(lessonid);
    }
}
