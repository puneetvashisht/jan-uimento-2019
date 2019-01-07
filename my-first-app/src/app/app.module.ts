import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { BadgeComponent } from './components/badge.component';
import { CardComponent } from './components/card.component';

@NgModule({
  declarations: [
    AppComponent, ButtonComponent, BadgeComponent, CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
