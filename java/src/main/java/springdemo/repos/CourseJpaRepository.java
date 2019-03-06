package springdemo.repos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import springdemo.entities.Course2;

@Repository
public class CourseJpaRepository {
	
	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public void add(Course2 course){
		//SQL
//		em.find
		em.persist(course);
		
	}

	public Course2 findCourseById(int id) {

		return em.find(Course2.class, id);
	}

	@Transactional
	public Course2 updateCourse(int id, String summary) {

		Course2 course = em.find(Course2.class, id);
		course.setSummary(summary);
		return course;
	}

	public List<Course2> findAllCourses() {
		TypedQuery<Course2> query= em.createNamedQuery("selectAllCourses", Course2.class);
		return query.getResultList();
	}

}
