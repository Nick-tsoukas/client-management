import { Component, OnInit } from '@angular/core';
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

  onSubmit(formData) {
    this.chatService.userAddMessage(this.userId,formData.value.message);
  }
  

  constructor(private authService: AuthService, private chatService : ChatServiceService) {

    this.userId = this.authService.userId;
   }

  ngOnInit() {
   
    this.chats = this.chatService.getMes(this.userId);


  }

}
