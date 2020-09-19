import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent implements OnInit {

  habits: Habit[];

  // selectedHabit: Habit;
 // defines heroService and identifies it as a injection site
  constructor(private habitService: HabitService) {};

  // Retrieve the habits from the service.
  // call getHabits() inside the **ngOnInit lifecycle hook**
  // let Angular call ngOnInit() after constructing a HeroesComponent instance
  ngOnInit() {
    this.getHabits();
  }

  // onSelect(habit: Habit): void {
  //   this.selectedHabit = habit;
  // }

  getHabits(): void{
    this.habitService.getHabits()
      .subscribe(habits => this.habits = habits);
  }
}