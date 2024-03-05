// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-chat-bot',
//   standalone: true,
//   imports: [],
//   templateUrl: './chat-bot.component.html',
//   styleUrl: './chat-bot.component.css',
// })
// export class ChatBotComponent {
//   @Output() getStartedBtn = new EventEmitter<boolean>();

//   popUpChatDialog() {
//     this.getStartedBtn.emit(true);
//     // alert('Hello from get started botton');
//   }
// }


import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'],
})
export class ChatBotComponent {
  @Input() buttonText: string = 'Get Started';
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onClick(): void {
    this.showModal.emit(true);
  }
}
