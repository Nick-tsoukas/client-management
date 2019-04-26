import { Component, OnInit , Input} from '@angular/core';
import { fadeInItems } from '@angular/material';
import { ActivatedRoute} from '@angular/router';

import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-message-count',
  templateUrl: './message-count.component.html',
  styleUrls: ['./message-count.component.scss']
})
export class MessageCountComponent implements OnInit {
  @Input() name : string;
  constructor(private chatService: ChatServiceService, private route: ActivatedRoute,) { 
    this.name = 'nick'

  }

  ngOnInit() {
   this.name = 'nick'
  }

}
