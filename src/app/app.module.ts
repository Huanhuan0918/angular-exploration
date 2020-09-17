import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HabitsComponent } from './habits/habits.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent,
    HabitsComponent,
    HabitDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
