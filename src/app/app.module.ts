import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HabitsComponent } from './habits/habits.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component'

import { AppRoutingModule } from './app-routing.module';
import { HabitCreateComponent } from './habit-create/habit-create.component';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent,
    HabitsComponent,
    HabitDetailComponent,
    HabitCreateComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
