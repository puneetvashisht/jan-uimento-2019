import { Course } from "../models/course";
import { Observable } from "rxjs";

export interface ICourseService {

    fetchAllCourses(): Promise<any> | Observable<any>;
    addCourse(course:Course): Promise<any>;
    deleteCourse(index: number): Promise<any>;

}