import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'comp-first',
    template: `
        <h2>First Component</h2>
        <input type="text" #msg (change)="0" placeholder="Enter Log Message"/>
        <button (click)="log(msg.value)">Log Message</button>
        <button (click)="displayLogs()">Display Logs</button>
        <button (click)="displayCourses()">Display Courses</button>
    `
})
export class FirstComponent implements OnInit {

    constructor(private logService: LogService, private courseService: CourseService) { }

    ngOnInit() { 
    }

    log(message:string){
        this.logService.log(message);
    }

    displayLogs(){

        this.logService.displayLogs()
    }

    displayCourses(){
        this.courseService.fetchAllCourses()
        .then(data=>console.log(data));
    }

}