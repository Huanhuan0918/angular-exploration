import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit';
import { HabitList } from '../list-habits';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  habits: Habit[];

  selectedHabit: Habit;

  constructor(private habitService: HabitService) {};

  ngOnInit() {
    this.getHabits();
  }

  onSelect(habit: Habit): void {
    this.selectedHabit = habit;
  }

  getHabits(): void{
    this.habitService.getHabits()
      .subscribe(habits => this.habits = habits);
  }
}