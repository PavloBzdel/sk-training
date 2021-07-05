import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'about/:name/:age', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
