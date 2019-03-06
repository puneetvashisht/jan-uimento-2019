package springdemo;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import springdemo.entities.Course2;
import springdemo.repos.CourseJpaRepository;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestCourseJpaRepository {
	
	@Autowired
	CourseJpaRepository repo;

//	@Test
	public void testFetchCourseById(){
		int id = 3;
		Course2 course = repo.findCourseById(id);
		System.out.println(course);
		assertEquals(course.getId(), id);
		
	}
	
	@Test
	public void testFetchAllCourses(){
		List<Course2> courses = repo.findAllCourses();
		System.out.println(courses);
		assertEquals(courses.size(), 3);
	}

	
//	@Test
	public void testUpdateCourse(){
		int id = 3;
		String summary = "changed summary";
		Course2 course = repo.updateCourse(id, summary);
		System.out.println(course);
		assertEquals(course.getSummary(), summary);
		
	}
	
//	@Test
	public void testCourseAdd(){
		
		Course2 course = new Course2("Angular", "framework from google!!");
//		Course2 course = new Course2("React", "library from facebook!!");
		repo.add(course);
	}
}
