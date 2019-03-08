package com.cts.januimentospringboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.januimentospringboot.entities.Course2;

@RestController
public class CourseController {
	
	
	@RequestMapping(path="/courses", method=RequestMethod.GET)
	public Course2 getCourse(){
		
		Course2 course = new Course2("REST", "Light weight Http communication using JSON");
		course.setId(23);
		return course;
		
	}

}
