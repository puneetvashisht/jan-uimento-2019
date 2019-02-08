import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators'
import { Course } from '../models/course';
import { ICourseService } from './icourse.service';
import { Observable } from 'rxjs';

const baseUrl: string = 'http://localhost:3000/courses/'

@Injectable()
export class CourseService implements ICourseService {
    
    constructor(private http: Http) { }


    fetchAllCourses(): Observable<any>{
        // return
         return this.http.get(baseUrl)
         .pipe(
            map(res => res.json())
         )
        
        //  .map((res)=>res.json())
         

        // .toPromise()
        // .then(res=> res.json())
    }


    addCourse(course:Course): Promise<any>{
     return this.http.post(baseUrl, course)
    .toPromise()
    .then(res=> res.json())
    }


    deleteCourse(index: number): Promise<any>{
     return this.http.delete(baseUrl + index)
    .toPromise()
    .then(res=> {
        console.log(res.status)
        return res.json()
    })
    }

}