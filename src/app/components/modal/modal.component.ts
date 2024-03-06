import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { minimize, reset } from '../../states/chatbot/chatbot.action';
import { IChatBotState } from '../../states/chatbot/chatbot.reducer';

declare global {
  interface Window {
    WebChat: any;
  }
}

window.WebChat = window.WebChat || {};

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Output() minimiseIcon = new EventEmitter<boolean>();
  @Output() closeIcon = new EventEmitter<boolean>();
  private isWebChatInitialized = false;

  isEnlargedModal: boolean = false; 

  private store = inject(Store);
  status$: Observable<IChatBotState>;

  constructor() {
    this.status$ = this.store.select('chatbot');
  }

  resetState() {
    this.store.dispatch(reset());
  }

  closeChatDialogModal() {
    this.closeIcon.emit(false);
    this.isEnlargedModal = false;

    const webchatDiv = document.getElementById('webchat');
    if (webchatDiv) {
      while (webchatDiv.firstChild) {
        webchatDiv.removeChild(webchatDiv.firstChild);
      }
    }
    
    this.isWebChatInitialized = false;
    this.resetState();
  }

  openChatDialogModal() { 
    if (!this.isWebChatInitialized) {
      this.initializeWebChat();
      this.isWebChatInitialized = true;
    }
  }

  enlargeChatDialogModal() {
    this.isEnlargedModal = !this.isEnlargedModal;
  }

  minimiseChatDialogModal() {
    this.isEnlargedModal = false;
    this.store.dispatch(minimize());
  }

  ngOnInit(): void {
    this.openChatDialogModal();
  }

  initializeWebChat() {
    const script = document.createElement('script');
    script.src =
      'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
    script.crossOrigin = 'anonymous';
    const styleOptions = {
      bubbleBackground: 'rgba(0, 0, 255, .1)',
      bubbleFromUserBackground: 'rgba(0, 255, 0, .1)',
      botAvatarImage:
        'https://firebasestorage.googleapis.com/v0/b/fbna-games.appspot.com/o/chatbot%2Fchatbot_dp.png?alt=media&token=b930abea-13de-42c2-950e-036864c60a99',
      botAvatarInitials: 'CR',
      userAvatarImage: 'https://github.com/compulim.png?size=64',
      userAvatarInitials: 'WC',
    };
    script.onload = () => {
      window.WebChat.renderWebChat(
        {
          directLine: window.WebChat.createDirectLine({
            token: 'io7ROTvbgRg.-FKTgNLueqQIVo9pjDi6zvFwYwiWuiep6Ya_KCzmyQw',
          }),
          styleOptions,
          locale: 'en-US',
        },
        document.getElementById('webchat')
      );
      (document.querySelector('#webchat > *') as HTMLElement)?.focus();
    };

    document.body.appendChild(script);
  }
}
