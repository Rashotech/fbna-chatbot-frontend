import { Component } from '@angular/core';
import { AboutComponent } from "../../pages/about/about.component";

@Component({
    selector: 'app-chat-bot',
    standalone: true,
    templateUrl: './chat-bot.component.html',
    styleUrl: './chat-bot.component.css',
    imports: [AboutComponent]
})
export class ChatBotComponent {
  isOpen: boolean = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
