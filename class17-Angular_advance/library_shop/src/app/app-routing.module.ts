import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SuggestedBooksComponent } from './pages/suggested-books/suggested-books.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'suggested/books', component: SuggestedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
