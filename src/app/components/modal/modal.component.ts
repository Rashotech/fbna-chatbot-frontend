import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  @Output() closeIcon = new EventEmitter<boolean>();

  closeChatDialogModal() {
    this.closeIcon.emit(false);
  }

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      window.WebChat.renderWebChat(
        {
          directLine: window.WebChat.createDirectLine({
            token: 'io7ROTvbgRg.-FKTgNLueqQIVo9pjDi6zvFwYwiWuiep6Ya_KCzmyQw'
          }),
          locale: 'en-US'
        },
        document.getElementById('webchat')
      );
    };
    document.body.appendChild(script); 
  }
}
