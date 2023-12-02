package com.csit321g2.vergara.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csit321g2.vergara.Entity.ScoreEntity;

@Repository
public interface ScoreRepository extends JpaRepository<ScoreEntity, Integer> {

}
