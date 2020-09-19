import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitsComponent } from './habits/habits.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitCreateComponent } from './habit-create/habit-create.component';

const routes: Routes = [
  { path: '', component: HabitsComponent, pathMatch: 'full' },
  { path: 'habit-create', component: HabitCreateComponent },
  { path: 'detail/:name', component: HabitDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}