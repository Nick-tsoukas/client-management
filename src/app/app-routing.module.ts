import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListingsComponent } from './listings/listings.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'signup', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


