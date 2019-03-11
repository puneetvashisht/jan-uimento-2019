package com.cts.januimentospringboot.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name="selectAllCourses", query="select c from Course2 c")
public class Course2 implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
//	@Column(name="COURSE_TITLE")
	String title;
	
	String summary;
	
	

	public Course2(String title, String summary) {
		super();
		this.title = title;
		this.summary = summary;
	}

	public Course2() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	@Override
	public String toString() {
		return "Course2 [id=" + id + ", title=" + title + ", summary=" + summary + "]";
	}

	
}
