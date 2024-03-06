import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { maximize, updateStatus } from '../../states/chatbot/chatbot.action';
import { IChatBotState } from '../../states/chatbot/chatbot.reducer';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
})
export class ChatBotComponent { 
  @Output() getStartedBtn = new EventEmitter<boolean>();
  @Input() btnState: boolean = false;
  private store = inject(Store);
  status$: Observable<IChatBotState>;

  constructor() {
    this.status$ = this.store.select('chatbot');
  }

  changeStatus() {
    this.store.dispatch(updateStatus({ status: 'Continue' }));
  }

  popUpChatDialog() {
    this.getStartedBtn.emit(true);
    this.changeStatus();
    this.store.dispatch(maximize());
  }
}
