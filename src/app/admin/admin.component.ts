import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Output() isAdmin : boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAdmin = true;
  }

}
