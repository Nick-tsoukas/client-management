import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from '../app/list/list.component'
import { AuthGuard } from './auth/auth.guard';
import { ListResolver} from "./list.resolver";
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { AdminListingComponent } from './admin/admin-listings/admin-listings.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ChatResolver } from './chat.resolver';
import { UserChatComponent } from './user-chat/user-chat.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listings', component: ListingsComponent, canActivate:[AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: UserChatComponent, canActivate:[AuthGuard]},
  { path: 'admin', component: AdminComponent,canActivate:[AuthGuard],
  children: [
    { path: 'chat/:userId', component: ChatComponent,canActivate:[AuthGuard], resolve: {
      chat: ChatResolver
  }},
    { path: 'listing', component: AdminListingComponent, canActivate:[AuthGuard] },
    { path: 'users', component: UserListComponent, canActivate:[AuthGuard] }
  ]},
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
  providers: [AuthGuard, ListResolver, ChatResolver]
})
export class AppRoutingModule { }


