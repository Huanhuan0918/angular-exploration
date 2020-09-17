import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';
import { HabitList } from './list-habits';

@Injectable({
  providedIn: 'root',
})
export class HabitService {

  constructor() { }

  getHabits(): Observable<Habit[]> {
    return of(HabitList);
  }
}