import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitsComponent } from './habits/habits.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitCreateComponent } from './habit-create/habit-create.component';

// The following configuration defines the possible routes for the this app.
// ** path is a wildcard route. Any route that does not match will route to that path
const routes: Routes = [
  { path: '', component: HabitsComponent, pathMatch: 'full', data: { animation: 'habits' }},
  { path: 'habit-create', component: HabitCreateComponent},
  { path: 'detail/:name', component: HabitDetailComponent, data: { animation: 'habit-detail' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}