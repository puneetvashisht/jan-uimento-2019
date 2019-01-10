import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../models/course';

const baseUrl: string = 'http://localhost:3000/courses/'

@Injectable()
export class CourseService {
    
    constructor(private http: Http) { }


    fetchAllCourses(): Promise<any>{
        return this.http.get(baseUrl)
        .toPromise()
        .then(res=> res.json())
    }


    addCourse(course:Course): Promise<any>{
     return this.http.post(baseUrl, course)
    .toPromise()
    .then(res=> res.json())
    }


    deleteCourse(index: number): Promise<any>{
     return this.http.delete(baseUrl + index)
    .toPromise()
    .then(res=> res.json())
    }

}