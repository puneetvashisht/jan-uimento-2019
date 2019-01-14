import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';


@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(courses: Array<Course>, name: string) {
        console.log(courses, name) 
        return courses.filter(course=>course.title.toLowerCase().includes(name.toLowerCase()))
    }

}