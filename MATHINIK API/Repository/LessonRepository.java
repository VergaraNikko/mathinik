package com.csit321g2.vergara.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csit321g2.vergara.Entity.LessonEntity;

@Repository
public interface LessonRepository extends JpaRepository<LessonEntity, Integer> {

}
