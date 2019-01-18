import { Course } from "../models/course";

export interface ICourseService {

    fetchAllCourses(): Promise<any>;
    addCourse(course:Course): Promise<any>;
    deleteCourse(index: number): Promise<any>;

}