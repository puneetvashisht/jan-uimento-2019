import { Injectable, Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { Course } from '../models/course';
import { ICourseService } from './icourse.service';
import { Observable } from 'rxjs';

@Injectable()
export class CourseLocalService implements ICourseService{
    
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    fetchAllCourses(): Observable<any>{

        // return new Promise((resolve, reject)=>{
        //     let courses = this.storage.get('my-courses') || []
        //     resolve(courses)
        // })
        // return this.http.get(baseUrl)
        // .toPromise()
        // .then(res=> res.json())
        return null;
    }


    addCourse(course:Course): Promise<any>{
        return new Promise((resolve, reject)=>{
            let courses = this.storage.get('my-courses') || []
            courses.push(course)
            this.storage.set('my-courses', courses)
            resolve({message: 'Course added to localStorage'})
        })
    }


    deleteCourse(index: number): Promise<any>{
        return new Promise((resolve, reject)=>{})
    }
}