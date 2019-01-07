import { Component } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Array<Course> = [
    {title: 'Angular', summary:'Framework from Google!!'},
    {title: 'React', summary:'Library from Facebook!!'},
    {title: 'JS', summary:'Base Programming Language!!'},
    {title: 'Ember', summary:'Open source UI framework!!'},
    {title: 'CanJS', summary:'Yet another popular UI framework!!'}
  ]


  title:string = "First Angular";
  revStr: string = '' 

  reverse(){
    console.log(this.title)
    let revStr = this.title.split('').reverse().join('')
    this.revStr = revStr

  }
}
