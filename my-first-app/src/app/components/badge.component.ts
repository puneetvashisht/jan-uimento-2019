import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-badge',
    template: `
    <button type="button" (click)="handleClick()" class="btn btn-primary">
        {{caption}} <span class="badge badge-light">{{count}}</span>
    </button>
    `
})
export class BadgeComponent implements OnInit {

    @Input('caption')caption : string = "Inbox"
    @Input('count') count : number = 1

    constructor() { }

    ngOnInit() { 

    }

    handleClick(){
        console.log('badge is clicked..')
        this.count++;
    }

}