import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ChatServiceService } from './chat-service.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  userId: string;
  @Input()
  chats: Observable<any>;
  ids: any;
  ar: string[];
  messageValue ;

  deleteAll(){
    this.ar.forEach((val) => {
      this.chatService.delete(this.userId,val);
    })
    }

  onSubmit(formData) {
    this.chatService.addMessage(this.userId, formData.value.message);
    formData.reset();
  }


  constructor(private chatService: ChatServiceService, private route: ActivatedRoute, private db: AngularFirestore) {

    this.userId = this.route.snapshot.data['chat']['uid'];

  }
  ngOnInit() {
    this.chats = this.chatService.getMes(this.userId);
    this.ids = this.chatService.getAllId(this.userId);
    // subscribe to set val of ar to an Array of ids 
    this.ids.subscribe(val => {
      this.ar = val;
    })
  }

}
