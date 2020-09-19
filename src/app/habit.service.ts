import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';
import { HabitList } from './list-habits';

@Injectable({
  providedIn: 'root',
})
export class HabitService {

  constructor() { }

  addHabits(habit: Habit){
    return of(HabitList.push(habit));
  }

  getHabits(): Observable<Habit[]>{
    return of(HabitList);
  }

  getHabit(name: string): Observable<Habit> {
    return of(HabitList.find(habit => habit.name === name));
  }

  changeHabit(h: Habit) {
    HabitList[HabitList.findIndex(habit => habit.name == h.name)] = h;
  }
}