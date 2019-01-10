import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
        <img src="http://via.placeholder.com/100x80" class="card-img-top" alt="No Image Available"/>
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{summary}}</p>
            <my-badge caption="Votes" count="0"></my-badge>
            <button type="button" class="btn btn-danger" (click)="deleteCourse()">Delete</button>
        </div>
    </div>
    
    `
})
export class CardComponent implements OnInit {


    @Input('title') title: string = 'Default'
    @Input('summary') summary: string = 'Default Summary'
    @Output('courseDeleted') courseDeleted: EventEmitter<any> = new EventEmitter();
    constructor(private http: Http) { }

    ngOnInit() { 

    }

    deleteCourse(){
        console.log('Deleting course')
        this.courseDeleted.emit();
    }

}