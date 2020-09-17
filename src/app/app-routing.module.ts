import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitsComponent } from './habits/habits.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';

const routes: Routes = [
  { path: '', component: HabitsComponent, pathMatch: 'full' },
  // { path: 'habits', component: HabitsComponent },
  { path: 'detail/:id', component: HabitDetailComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}