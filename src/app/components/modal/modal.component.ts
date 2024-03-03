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

  isEnlargedModal: boolean = false;

  closeChatDialogModal() {
    this.closeIcon.emit(false);
    this.isEnlargedModal = false;
  }

  enlargeChatDialogModal() {
    this.isEnlargedModal = true;
  }
}
