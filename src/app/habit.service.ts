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

  getHabit(id: number): Observable<Habit> {
    return of(HabitList.find(habit => habit.id === id));
  }
}