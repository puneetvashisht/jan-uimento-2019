import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
        <img src="http://via.placeholder.com/100x80" class="card-img-top" alt="No Image Available"/>
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{summary}}</p>
            <my-badge caption="Votes" count="0"></my-badge>
        </div>
    </div>
    
    `
})
export class CardComponent implements OnInit {


    @Input('title') title: string = 'Default'
    @Input('summary') summary: string = 'Default Summary'

    constructor() { }

    ngOnInit() { 

    }

}