import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'my-dropdown-item',
    template: `
        <a class="dropdown-item" href="#"  (click)="selectCourse(course.title)">{{course.title}}</a>
    `
})
export class DropdownItemComponent implements OnInit {


    @Input('course') course: string = ''
    @Output('courseSelected') courseSelected: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() { 

    }

    selectCourse(course: string){
        console.log('Selected Course: ', course)
        this.courseSelected.emit(course);
        // this.show = false;
        // this.caption = course

    }

}