import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from '../app/list/list.component'
import { AuthGuard } from './auth/auth.guard';
import { ListResolver} from "./list.resolver";



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listings', component: ListingsComponent, canActivate:[AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'listings/:listId',
    component: ListComponent,
    resolve: {
        list: ListResolver
    }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, ListResolver]
})
export class AppRoutingModule { }


