import { Component, OnInit, Inject } from '@angular/core';
import { ICourseService } from '../services/icourse.service';

@Component({
    selector: 'add-course',
    template: `
   
    <div class="row">
  
      <div class="col-12">
        <h2 class="card-title">Add Course</h2>
      </div>
  
  
      <div *ngIf="message" class="col-12 alert alert-success alert-dismissible fade show" role="alert">
          <strong>{{message}}</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input type="text" #title (change)="0" class="form-control" placeholder="Enter Title" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Summary</span>
        </div>
        <input type="text" #summary (change)="0" class="form-control" placeholder="Enter Summary" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>
      <div class="col-12">
        <button class="btn btn-primary" (click)="addCourse(title.value, summary.value)">Add Course</button>
      </div>
  
  
    </div>
    `
})
export class AddCourseComponent implements OnInit {

    message: string = ''

    constructor(@Inject('CourseLocal') private courseService: ICourseService ) { }

    ngOnInit() { 

    }


    addCourse(title: string, summary: string){
        console.log(title, summary)
       this.courseService.addCourse({title,summary})
        .then(data => {
          this.message = data.message
          console.log(data)
          // this.courses = data
        })
      }
}