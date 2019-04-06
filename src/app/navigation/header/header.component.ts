import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Outputs the click event to trigger the side nav open or close
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth : boolean;
  authSubscription: Subscription;
  myImage: string = "./im.png"

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  onToggleSidenav(){
    
    this.sidenavToggle.emit();
  }

  onLogout(){
    this.authService.logOut();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

}
