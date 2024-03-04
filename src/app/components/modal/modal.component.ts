// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   standalone: true,
//   imports: [],
//   templateUrl: './modal.component.html',
//   styleUrl: './modal.component.css',
// })
// export class ModalComponent {
//   @Output() closeIcon = new EventEmitter<boolean>();

//   @Output() maximiseIcon = new EventEmitter<boolean>();

//   enlargeModal: boolean = false;

//   closeChatDialogModal() {
//     this.closeIcon.emit(false);
//     this.enlargeModal = false;
//   }

//   enlargeChatDialogModal() {
//     this.enlargeModal = true;
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() modalClosed = new EventEmitter<void>();
  @Output() resetChatbot = new EventEmitter<void>();
  @Output() minimizeChatbot = new EventEmitter<void>();

  isModalMaximize: boolean = false;

  chatData: string = '';

  constructor() { }

  minimize() {
    console.log("Modal minimized");
    this.minimizeChatbot.emit()
    this.modalClosed.emit();
  }

  maximize() {
    console.log("Modal maximized");
  this.isModalMaximize = !this.isModalMaximize
  }

  // enlargeChatDialogModal() {
  //   this.isEnlargedModal = true;
  // }

  cancel() {
    console.log("Modal canceled");
    this.modalClosed.emit();
    this.resetChatbot.emit();
    this.chatData = "";
  }

  private resetModalContent() {
    this.chatData = '';
    
  }
 }
