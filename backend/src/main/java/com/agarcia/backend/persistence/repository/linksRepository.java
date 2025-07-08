package com.agarcia.backend.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agarcia.backend.persistence.model.LinksEntity;


public interface linksRepository extends JpaRepository<LinksEntity, Long> {
    
}
