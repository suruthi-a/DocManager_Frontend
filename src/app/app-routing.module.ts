import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './components/signup/signup.component'
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent }, 
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'additem', component: AddItemsComponent },
  { path: 'listitem', component: ListItemsComponent },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
