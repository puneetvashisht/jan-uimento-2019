import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { BadgeComponent } from './components/badge.component';
import { CardComponent } from './components/card.component';
import { DropdownComponent } from './components/dropdown.component';
import { DropdownItemComponent } from './components/dropdown-item.component';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent, ButtonComponent, BadgeComponent, CardComponent, DropdownComponent, DropdownItemComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
