import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'test',
    component: HomeComponent
  }
  ,
  {
    path: 'users',
    loadChildren:  () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
