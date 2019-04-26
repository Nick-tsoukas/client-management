import { AfterViewInit, Component, OnInit, ViewChild, Input} from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ChatServiceService} from './chat-service.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

interface Chat {
  uid: string;
  message: string;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
   userId: string;
   @Input()
   chats: Observable<any>;

   // users userid chat collection .... lets add A Chat message 
  // addMessage(id, message: string){
  //   this.db.collection(`users/${id}chat`).add(message);
  // }

   onSubmit(formData){
     console.log('adding message!+!+!')
    this.chatService.addMessage(this.userId,formData.value.message);
   }


  constructor(private chatService: ChatServiceService, private route: ActivatedRoute, private db : AngularFirestore) { 
    

    this.userId = this.route.snapshot.data['chat']['uid'];

  }

  // create form and get form data 
  // we already have the user id 
  // get Message 
  // call add message on click event in html 

  ngOnInit() {
    this.chats = this.chatService.getMes(this.userId);
  }

}
