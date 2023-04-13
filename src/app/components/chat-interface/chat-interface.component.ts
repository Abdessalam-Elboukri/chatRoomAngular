import { Component, OnInit } from '@angular/core';
import {ConversationThreadService} from "../../services/conversation-thread.service";

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent implements OnInit {

  email="sender@g.com"
  constructor(private conversationThreadService:ConversationThreadService) { }

  myConversation:any
  ngOnInit(): void {
    this.getMyConversationThread(this.email);
  }


  getMyConversationThread(email:string){
    this.conversationThreadService.getAllMyConversation(email).subscribe((res)=>{
      this.myConversation=res.data
    })
  }

}
