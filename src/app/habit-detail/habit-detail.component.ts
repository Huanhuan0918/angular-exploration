import { Component, OnInit, Input } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { Habit } from "../habit";
import { HabitService } from '../habit.service'

@Component({
  selector: "app-habit-detail",
  templateUrl: "./habit-detail.component.html",
  styleUrls: ["./habit-detail.component.css"]
})
export class HabitDetailComponent implements OnInit {
  habit: Habit;

  constructor(
    private route: ActivatedRoute,
    private habitService: HabitService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHabit();
  }

  getHabit(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.habitService.getHabit(id)
      .subscribe(habit => this.habit = habit);
  }

  goBack(): void {
    this.location.back();
  }
}
