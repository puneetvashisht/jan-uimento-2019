import { Injectable } from '@angular/core';


@Injectable()
export class LogService {
    
    constructor() { }

    messages: Array<string> = ['sample log message']

    log(message: string){
        this.messages.push(message)
    }

    displayLogs(){
        console.log(this.messages)
    }

}