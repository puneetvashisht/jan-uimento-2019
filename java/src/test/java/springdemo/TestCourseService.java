package springdemo;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import springdemo.entities.Course;
import springdemo.repos.CourseRepository;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestCourseService {
	
	@Autowired
	CourseRepository repo;


//	@Test
	public void testFetchCourse(){
		int result = repo.fetchAllCourses();
		assertEquals("Two courses should be present", result, 1);
	}
	
	@Test
	public void testFetchCourseByName(){
		Course course = repo.fetchAllCoursesByName("Postman");
		assertEquals("Two courses should be present", course.getTitle(), "Postman");
	}
}
