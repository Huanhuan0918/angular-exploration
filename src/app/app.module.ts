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
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PopupService],
  declarations: [ 
    AppComponent, 
    TopBarComponent,
    HabitsComponent,
    HabitDetailComponent,
    HabitCreateComponent,
    PopupComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
