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
  
  temp = new Habit( '', '', '');

  enum_icons = [
    {name: 'pool'},
    {name: 'shopping_cart'},
    {name: 'menu_book'},
  ]

  constructor(
    private route: ActivatedRoute,
    private habitService: HabitService,
    private location: Location
  ) {}

  ngOnInit() { }

  onSubmit() {
  }

  addHabit(form: any): void {
    console.log(form.controls) ;
    this.habitService.addHabits(
      new Habit(
        form.controls.icon.value, 
        form.controls.name.value, 
        form.controls.description.value));
    this.location.back();
  }

}