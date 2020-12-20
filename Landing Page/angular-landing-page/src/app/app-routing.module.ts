import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import {LeadersComponent} from './components/leaders/leaders.component';
import {ArchievementComponent} from './components/archievement/archievement.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent },
  {path: 'leaders', component: LeadersComponent},
  {path: 'achievement', component: ArchievementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
