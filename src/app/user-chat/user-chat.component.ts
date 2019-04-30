import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ChatServiceService } from '../chat/chat-service.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
  userId : string;
  chats: any;
  ids: any;
  ar: string[];

  onSubmit(formData) {
    this.chatService.userAddMessage(this.userId,formData.value.message);
    // resets form after submit message 
    formData.reset();
  }
  
  
  deleteAll(){
  this.ar.forEach((val) => {
    this.chatService.delete(this.userId,val);
  })
  }

  constructor(private authService: AuthService, private chatService : ChatServiceService) {

    this.userId = this.authService.userId;
   }

  ngOnInit() {
    this.chats = this.chatService.getMes(this.userId);
    // getting the ids of the chats for the delete function 
    this.ids = this.chatService.getAllId(this.userId);
    // subscribe to set val of ar to an Array of ids 
    this.ids.subscribe(val => {
      this.ar = val;
    })

  }

  ngAfterViewInit() {         
  }  

}
