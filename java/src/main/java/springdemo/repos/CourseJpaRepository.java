package springdemo.repos;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
		
		em.persist(course);
		
	}

}
