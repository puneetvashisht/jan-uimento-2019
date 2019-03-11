package com.cts.januimentospringboot;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.januimentospringboot.entities.Course2;
import com.cts.januimentospringboot.repos.CourseRepo;

@RestController
public class CourseController {
	
	@Autowired
	CourseRepo courseRepo;
	
	@RequestMapping(path="/courses/{id}", method=RequestMethod.GET)
	public Course2 getCourse(@PathVariable("id") int id){
		
//		Course2 course = new Course2("REST", "Light weight Http communication using JSON");
//		course.setId(23);
		
		System.out.println("Id passed as param: " + id);
		Course2 course = null;
		try{
			course = courseRepo.getOne(id);
			System.out.println(course);
		}
		catch(EntityNotFoundException e){
			throw new CourseNotFoundException("Course not found with id: "+ id);
		}
		
		return course;
		
	}
	
	@RequestMapping(path="/courses", method=RequestMethod.GET)
	public List<Course2> getAllCourses(){
		return courseRepo.findAll();
	}
	
	@RequestMapping(path="/courses", method=RequestMethod.POST)
	public ResponseEntity<Void> addCourse(@RequestBody Course2 course){
		
		ResponseEntity<Void> re = null;
		
		Course2 findCourse = courseRepo.findByTitle(course.getTitle());
		if(findCourse==null){
			courseRepo.save(course);
			re = new ResponseEntity<>(HttpStatus.CREATED);
		}
		else{
			re = new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
		return re;
		
	}

}
