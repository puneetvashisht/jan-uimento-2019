package springdemo.repos;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import springdemo.entities.Course;

public class CourseRowMapper implements RowMapper<Course>{

	public Course mapRow(ResultSet rs, int rowNum) throws SQLException {
		Integer id = rs.getInt(1);
		String title = rs.getString(3);
		String description = rs.getString(2);
		Course course = new Course(id, title, description);
		System.out.println("Course obj created .." + course);

		return course;
	}

//	@Override
//	public Course mapRow(ResultSet rs, int rowNum) throws SQLException {
//		Course course = null;
//
//			Integer id = rs.getInt(1);
//			String name = rs.getString(2);
//			String description = rs.getString(3);
//			course = new Course(id, name, description);
//			
//
//		return course;
//	}

}
