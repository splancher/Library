import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksDashboardComponent} from "./Components/books/books-dashboard/books-dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: "full"
  },
  {
    path: 'books',
    component: BooksDashboardComponent
  }
  // other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
