// Tutorial links about service: https://angular.io/tutorial/toh-pt4
// Components should't know or modify data directly
// Using service to share information among classes
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  // HeroService.getHeroes() method has a synchronous signature
  // Will fetch data from a remote server, which is asynchronous
  // Return an Observable because it will eventually use the Angular HttpClient.get method to fetch data
  getHabits(): Observable<Habit[]>{
    // simulate getting data from the server with the RxJS of() function
    return of(HabitList);
  }
  // Get data from an actual server: https://angular.io/tutorial/toh-pt6#heroes-and-http
  // getHabits(): Observable<Habit[]>{
  //   return this.http.get<Habit[]>(this.heroesUrl)
  //   .pipe(
  //     tap(_ => this.log('fetched Habit')),
  //     catchError(this.handleError<Habit[]>('getHabits', []))
  //   );
  // }
  
  getHabit(name: string): Observable<Habit> {
    return of(HabitList.find(habit => habit.name === name));
  }

  changeHabit(h: Habit) {
    HabitList[HabitList.findIndex(habit => habit.name == h.name)] = h;
  }
}