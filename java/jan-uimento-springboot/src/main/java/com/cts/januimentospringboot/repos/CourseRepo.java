package com.cts.januimentospringboot.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.januimentospringboot.entities.Course2;

public interface CourseRepo extends JpaRepository<Course2, Integer> {
	
	public Course2 findByTitle(String title);

}
