import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() closeIcon = new EventEmitter<boolean>();

  @Output() maximiseIcon = new EventEmitter<boolean>();

  enlargeModal: boolean = false;

  closeChatDialogModal() {
    this.closeIcon.emit(false);
    this.enlargeModal = false;
  }

  enlargeChatDialogModal() {
    this.enlargeModal = true;
  }
}
