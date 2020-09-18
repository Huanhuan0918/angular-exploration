import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { Habit } from "../habit";
import { HabitService } from '../habit.service';


@Component({
  selector: 'app-habit-create',
  templateUrl: './habit-create.component.html',
  styleUrls: ['./habit-create.component.css']
})
export class HabitCreateComponent implements OnInit{
  
  temp = new Habit( 18, 'Morning Exercise');

  constructor(
    private route: ActivatedRoute,
    private habitService: HabitService,
    private location: Location
  ) {}

  ngOnInit() { }

  onSubmit() {
  }

  addHabit(form: any): void {
    // console.log(form.controls.name.value) ;
    // console.log(form.controls.id.value) ;
    this.habitService.addHabits(new Habit(form.controls.id.value, form.controls.name.value));
    this.location.back();
  }

}