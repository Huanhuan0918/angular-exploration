import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { Habit } from "../habit";
import { EnumIcon } from "../icon";
import { HabitService } from '../habit.service';


@Component({
  selector: 'app-habit-create',
  templateUrl: './habit-create.component.html',
  styleUrls: ['./habit-create.component.css']
})
export class HabitCreateComponent implements OnInit{
  
  temp = new Habit( '', '', '');
  enum_icons = EnumIcon;
  // enum_icons = [
  //   {name: 'pool'},
  //   {name: 'shopping_cart'},
  //   {name: 'menu_book'},
  //   {name: 'pets'},
  //   {name: 'movie'},
  //   {name: 'local_dining'}
  // ]

  constructor(
    private route: ActivatedRoute,
    private habitService: HabitService,
    private location: Location
  ) {}

  ngOnInit() { }

  onSubmit() {
  }

  // Obain data from form, create a new habit
  // and push to the habit list
  addHabit(form: any): void {
    // console.log(form.controls) ;
    this.habitService.addHabits(
      new Habit(
        form.controls.icon.value, 
        form.controls.name.value, 
        form.controls.description.value));
    this.location.back();
  }

}