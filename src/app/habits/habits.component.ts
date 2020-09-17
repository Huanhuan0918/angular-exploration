import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit';
import { HabitList } from '../list-habits';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  habits = HabitList;

  selectedHabit: Habit;

  constructor() { }

  ngOnInit() {
  }

  onSelect(habit: Habit): void {
    this.selectedHabit = habit;
  }
}