import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';
import { Http } from '@angular/http';
import { CourseService } from './services/course.service';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {

  constructor(private http: Http, private courseService: CourseService){

  }

  ngOnInit(){
    console.log('Do any initialization here...')
    // this.http.get('http://localhost:4200/assets/courses.json')
    this.courseService.fetchAllCourses()
    .then(data => {
      console.log(data)
      this.courses = data
    })
  }

  handleCourseDeletion(value: any, index: number){
    console.log('Delete Method in Parent Component');
    console.log(value, index);
    this.courseService.deleteCourse(index)
    .then(data => {
      console.log(data)
      this.courses = data
    })
  }


  addCourse(title: string, summary: string){
    console.log(title, summary)
   this.courseService.addCourse({title,summary})
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
