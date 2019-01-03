import { Component } from "@angular/core";


@Component({
    selector: 'my-button',
    template: `
        <button (click)="handleClick()">{{caption}}</button>
    `
})
export class ButtonComponent{

    caption: string = "Inbox"


    handleClick(){
        console.log('Click event happened...', this.caption)
    }

}