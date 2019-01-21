import { Component, OnInit, Inject } from '@angular/core';
import { Course } from './models/course';
import { Http } from '@angular/http';
import { CourseService } from './services/course.service';
import { LogService } from './services/log.service';
import { CourseLocalService } from './services/course-local.service';
import { ICourseService } from './services/icourse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {

  ngOnInit(){

  }

  // constructor(private http: Http, @Inject('CourseLocal') private courseService: ICourseService ){

  // }
  // message: string = ''
  // courses: Array<Course> = []
  // today : Date = new Date()
  // title:string = "First Angular";
  // revStr: string = ''

  // ngOnInit(){
  //   console.log('Do any initialization here...')
  //   // this.http.get('http://localhost:4200/assets/courses.json')
  //   this.courseService.fetchAllCourses()
  //   .then(data => {
  //     console.log(data)
  //     this.courses = data
  //   })
  // }

  


  

   

  // reverse(){
  //   console.log(this.title)
  //   let revStr = this.title.split('').reverse().join('')
  //   this.revStr = revStr

  // }
}
