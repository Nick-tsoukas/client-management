import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth: boolean;
  show: Subscription;
  adminLink: boolean;
  authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });

    this.show = this.authService.isAdmin.subscribe(val => {
      this.adminLink = val; 
    });
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logOut();
    this.onClose();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
