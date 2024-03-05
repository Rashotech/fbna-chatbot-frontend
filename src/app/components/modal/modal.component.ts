
import { Component, OnInit } from '@angular/core';
import { ChatModalService } from '../../chat-modal.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as AppActions from '../../app.actions';


declare global {
  interface Window {
    WebChat: any;
  }
}

window.WebChat = window.WebChat || {};

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit  {
  isModalVisible: boolean = false;
  isModalMinimized: boolean = false;
  isModalResized: boolean = false;

  constructor(private chatModalService: ChatModalService, private store: Store<AppState>) { }

  ngOnInit() {
    this.chatModalService.showModal$.subscribe(() => {
      if (!this.isModalMinimized) {
        this.isModalVisible = true;
      }
    });
  }

  closeModal() {
    this.isModalVisible = false;
    this.store.dispatch(AppActions.closeChatModal());
  }

  minimizeModal() {
    this.isModalMinimized = true;
    this.store.dispatch(AppActions.minimizeChatModal());
  }

  restoreModal() {
    this.isModalMinimized = false;
    this.isModalVisible = true;
  }

  refreshModalData() {
    // Perform data refresh here
  }

  toggleResize() {
    this.isModalResized = !this.isModalResized;
    this.store.dispatch(AppActions.toggleModalResize());
  }
}
