import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
})
export class ChatBotComponent {
  @Output() getStartedBtn = new EventEmitter<boolean>();
  @Input() btnState: boolean = false;

  popUpChatDialog() {
    this.getStartedBtn.emit(true);
    // alert('Hello from get started botton');
  }
}
