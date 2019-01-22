import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'view-course-detail',
    template: `
        <h2>View Course Detail</h2>
        <h3>{{title}}</h3>
    `
})
export class ViewCourseDetailsComponent implements OnInit {

    title: string = ''
    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        // console.log(this.route.paramMap)
        this.route.params.subscribe( params => {
            console.log(params)
            this.title = params.id

        } );
    }

}