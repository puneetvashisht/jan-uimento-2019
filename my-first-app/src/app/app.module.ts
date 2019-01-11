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
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent, ButtonComponent, BadgeComponent, CardComponent, DropdownComponent, DropdownItemComponent, FirstComponent, SecondComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CourseService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
