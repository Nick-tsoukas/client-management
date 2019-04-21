import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../auth/users.model'
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'phone-number', 'company'];

  dataSet: User[]; 
  userList: Observable<User[]>

  constructor(private userService: UserService) { 
  //   this.userList.subscribe(val => {
  //     this.dataSet = val;
  //  });

    this.userList = userService.getUsers();
  }

  ngOnInit() {

      this.userList.subscribe(val => {
      this.dataSet = val;
   });
  }

}
