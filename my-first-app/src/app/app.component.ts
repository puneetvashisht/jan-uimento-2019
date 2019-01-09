import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http){

  }

  ngOnInit(){
    console.log('Do any initialization here...')
    // this.http.get('http://localhost:4200/assets/courses.json')
    this.http.get('http://localhost:3000/courses')
    .toPromise()
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      this.courses = data
    })
  }


  addCourse(title: string, summary: string){
    console.log(title, summary)

    this.http.post('http://localhost:3000/courses', {title, summary})
    .toPromise()
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      this.courses = data
    })
  }

  courses: Array<Course> = []

  title:string = "First Angular";
  revStr: string = '' 

  reverse(){
    console.log(this.title)
    let revStr = this.title.split('').reverse().join('')
    this.revStr = revStr

  }
}
