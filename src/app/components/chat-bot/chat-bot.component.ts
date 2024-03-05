import { Component } from '@angular/core';
import { ChatModalService } from '../../chat-modal.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as AppActions from '../../app.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-chat-bot',
  standalone: true,
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'],
  imports:[CommonModule]
  
})
export class ChatBotComponent {
  
  dynamicButtonText$: Observable<string>;

  constructor(private chatModalService: ChatModalService, private store: Store<AppState>) {
    this.dynamicButtonText$ = this.store.select(state => state.dynamicButtonText);
  }

  openModal() {
    this.chatModalService.showModal();
    this.store.dispatch(AppActions.updateDynamicButtonText('Continue'));
  }
}
