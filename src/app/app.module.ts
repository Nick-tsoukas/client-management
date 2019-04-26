import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ListingsComponent } from './listings/listings.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingService } from './listings/listing.service';
import { ListComponent } from './list/list.component';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { AvatarModule } from 'ng2-avatar';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { AdminListingComponent } from './admin/admin-listings/admin-listings.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ChatServiceService  } from './chat/chat-service.service';
import { MessageCountComponent } from './chat/message-count/message-count.component';





@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    HeaderComponent,
    SidenavListComponent,
    SignupComponent,
    LoginComponent,
    ListComponent,
    ListDialogComponent,
    AdminComponent,
    ChatComponent,
    AdminListingComponent,
    UserListComponent,
    MessageCountComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule.forRoot(), 
    AngularFireAuthModule
  ],
  providers: [AuthService, ListingService, ChatServiceService],
  bootstrap: [AppComponent],
  entryComponents: [ListDialogComponent]

})
export class AppModule { }
