package com.agarcia.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.agarcia.backend.persistence.model.LinksEntity;
import com.agarcia.backend.persistence.repository.linksRepository;


@CrossOrigin
@RestController
@RequestMapping("/api/links")
public class LinksController {

    @Autowired
    private linksRepository linksRepository;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<LinksEntity> getListLink(){
        return linksRepository.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public LinksEntity getIdLink(@PathVariable long  id){
        return linksRepository.findById(id).orElse(null);
    }
    
}
