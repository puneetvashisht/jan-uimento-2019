package springdemo;

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


	
	@Test
	public void testCourseAdd(){
		
		Course2 course = new Course2("Angular", "framework from google!!");
//		Course2 course = new Course2("React", "library from facebook!!");
		repo.add(course);
	}
}
