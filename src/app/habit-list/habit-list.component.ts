import { Component } from '@angular/core';
import {habits} from '../habit'

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent {
  habits = habits;
  constructor() { }

  ngOnInit() {
  }

}