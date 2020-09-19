import { Component, OnInit, Input } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { Habit } from "../habit";
import { EnumIcon } from "../icon";
import { HabitService } from '../habit.service';

@Component({
  selector: "app-habit-detail",
  templateUrl: "./habit-detail.component.html",
  styleUrls: ["./habit-detail.component.css"]
})
export class HabitDetailComponent implements OnInit {
  habit: Habit;
  enum_icons = EnumIcon;

  constructor(
    private route: ActivatedRoute,
    private habitService: HabitService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHabit();
  }

  getHabit(): void{
    const name = this.route.snapshot.paramMap.get('name');
    this.habitService.getHabit(name)
      .subscribe(habit => this.habit = habit);
  }

  goBack(form: any): void {
    console.log(form.controls);
    this.habitService.changeHabit(
      new Habit(
        form.controls.icon.value, 
        form.controls.name.value, 
        form.controls.description.value));
    this.location.back();
  }
}
