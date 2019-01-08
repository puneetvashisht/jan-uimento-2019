import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course';

@Component({
    selector: 'my-dropdown',
    template: `
    <div class="dropdown">
    <button (click)="toggleOptions()" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{caption}}
    </button>
    <div [ngClass]="show?'dropdown-menushow':'dropdown-menu'" aria-labelledby="dropdownMenuButton">
      <!-- <a class="dropdown-item" href="#" *ngFor="let course of courses" (click)="selectCourse(course.title)">{{course.title}}</a>-->
      <my-dropdown-item *ngFor="let c of courses" [course]="c" (courseSelected)="handleCourseSelected($event)"></my-dropdown-item>
    </div>
  </div>
    `
})
export class DropdownComponent implements OnInit {

    constructor() { }
    @Input('caption')caption: string = "Select Courses"
    @Input('courses') courses: Array<Course> = []
    show : boolean  = false
    

    ngOnInit() { 

    }

    toggleOptions(){
        this.show = !this.show
    }

    handleCourseSelected(course){
        console.log('Parent Component function: ', course)
        console.log('Selected Course: ', course)
        this.show = false;
        this.caption = course
    }

}