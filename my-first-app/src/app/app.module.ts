import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http} from '@angular/http'
import { StorageServiceModule } from 'angular-webstorage-service';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { BadgeComponent } from './components/badge.component';
import { CardComponent } from './components/card.component';
import { DropdownComponent } from './components/dropdown.component';
import { DropdownItemComponent } from './components/dropdown-item.component';
import { CourseService } from './services/course.service';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { LogService } from './services/log.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CourseLocalService } from './services/course-local.service';
import {ICourseService} from './services/icourse.service'
import { ViewCoursesComponent } from './components/view-courses.component';
import { AddCourseComponent } from './components/add-course.component';
import { ViewCourseDetailsComponent } from './components/view-coursedetails.components';
import { LoginComponent } from './components/login.component';
import { ProfileComponent } from './components/profile.component';



// let courseServiceFactory = (http: Http) => {
//   return new CourseService(http);
// };
const ROUTES: Routes = [
  {path:"", component: ViewCoursesComponent},
  {path:"add", component: AddCourseComponent},
  {path:"course/:id", component: ViewCourseDetailsComponent},
  {path:"login", component: LoginComponent},
  {path:"profile", component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent, ButtonComponent, BadgeComponent, CardComponent, DropdownComponent, DropdownItemComponent, FirstComponent, SecondComponent, CapitalizePipe, SearchPipe, ViewCoursesComponent, AddCourseComponent, ViewCourseDetailsComponent,LoginComponent,ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule,StorageServiceModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [ LogService,
    { provide: 'CourseLocal',   useClass:    CourseLocalService },
    { provide: 'Course',   useClass:    CourseService }
// {
  // provide: 'ICourseService', useFactory: courseServiceFactory,  deps: [Http]
// }
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
