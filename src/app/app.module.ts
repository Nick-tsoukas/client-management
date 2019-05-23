// Modules ===============
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

// Font Awesome package ===============
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




// AngularFire Modules =====
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

// Service ====================
import { ChatServiceService  } from './chat/chat-service.service';
import { ListingService } from './listings/listing.service';
import { AuthService } from './auth/auth.service';


// Components ================
import { ListingsComponent } from './listings/listings.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './list/list.component';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { AvatarModule } from 'ng2-avatar';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { AdminListingComponent } from './admin/admin-listings/admin-listings.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { AddListingComponent } from './add-listing/add-listing.component';

// testing font awesome 
library.add(faCoffee);



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
    UserChatComponent,
    AddListingComponent,
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
    FontAwesomeModule,
    ReactiveFormsModule,
    AvatarModule.forRoot(),
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
     ListingService,
      ChatServiceService,
      {provide: StorageBucket, useValue: 'gs://client-management-111c5.appspot.com/'}
    ],
  bootstrap: [AppComponent],
  entryComponents: [ListDialogComponent]

})
export class AppModule { }
