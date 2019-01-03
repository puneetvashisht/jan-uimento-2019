import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "First Angular";
  revStr: string = '' 

  reverse(){
    console.log(this.title)
    let revStr = this.title.split('').reverse().join('')
    this.revStr = revStr

  }
}
