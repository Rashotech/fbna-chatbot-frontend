import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateStatus } from '../../states/chatbot/chatbot.action';
import { IChatBotState } from '../../states/chatbot/chatbot.reducer';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
})
export class ChatBotComponent implements OnInit{
  @Output() getStartedBtn = new EventEmitter<boolean>();
  private store = inject(Store);
  status$: Observable<IChatBotState>;

  constructor() {
    this.status$ = this.store.select("chatbot");
  }

  ngOnInit() { 
    this.status$.subscribe(state => {
      console.log("Current Status:", state.status); // Assuming 'status' is the property 
      // You can utilize the status value for other logic here
    });
  }

  changeStatus() {
    this.store.dispatch(updateStatus({ status: "Continue" }))
  }

  popUpChatDialog() {
    this.getStartedBtn.emit(true);
    this.changeStatus();
    // alert('Hello from get started botton');
  }
}
