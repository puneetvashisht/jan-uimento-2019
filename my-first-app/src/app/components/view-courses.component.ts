import { Component, OnInit, Inject } from '@angular/core';
import { ICourseService } from '../services/icourse.service';
import { Course } from '../models/course';

@Component({
    selector: 'view-courses',
    template: `
       
        <div class="row">
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Search Course</span>
            </div>
            <input type="text" #search (keyup)="0" class="form-control" placeholder="Enter a course to search.. eg. Angular, React"
                aria-label="Username" aria-describedby="basic-addon1">
            </div>

        </div>
        <div class="row">

            <my-card *ngFor="let course of courses | search:search.value ;let i=index " title={{course.title}} summary={{course.summary}}
            (courseDeleted)="handleCourseDeletion($event, i)"></my-card>
        </div>
    `
})
export class ViewCoursesComponent implements OnInit {

    constructor(@Inject('CourseLocal') private courseService: ICourseService ){

    }
    message: string = ''
    courses: Array<Course> = []
    today : Date = new Date()
    title:string = "First Angular";
    revStr: string = ''
  
    ngOnInit(){
      console.log('Do any initialization here...')
      // this.http.get('http://localhost:4200/assets/courses.json')
      this.courseService.fetchAllCourses()
    .then(data => {
        console.log(data)
        this.courses = data
      })
    }

    handleCourseDeletion(value: any, index: number){
        console.log('Delete Method in Parent Component');
        console.log(value, index);
        this.courseService.deleteCourse(index)
        .then(data => {
          console.log(data)
          // this.courses = data
          this.message = data.message
        })
      }
}