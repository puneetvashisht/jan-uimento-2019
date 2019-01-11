import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
    selector: 'comp-second',
    template: `
        <h2>Second Component</h2>
        <input type="text" #msg (change)="0" placeholder="Enter Log Message"/>
        <button (click)="log(msg.value)">Log Message</button>
        <button (click)="displayLogs()">Display Logs</button>
    `
})
export class SecondComponent implements OnInit {

    constructor(private logService: LogService) { }

    ngOnInit() { 

    }

    log(message:string){
        this.logService.log(message);
    }

    displayLogs(){
        this.logService.displayLogs()
    }

}