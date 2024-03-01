import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
})
export class ChatBotComponent {
  @Output() getStartedBtn = new EventEmitter<boolean>();

  popUpChatDialog() {
    this.getStartedBtn.emit(true);
    // alert('Hello from get started botton');
  }
}
