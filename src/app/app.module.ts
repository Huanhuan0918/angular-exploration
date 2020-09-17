import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HabitListComponent } from './habit-list/habit-list.component'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HabitListComponent },
    ])
     ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    HabitListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
