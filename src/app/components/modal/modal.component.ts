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
  isModalMinimized: boolean = false;
  isMaximized: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() minimizeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clearModal: EventEmitter<void> = new EventEmitter<void>();
  onCancel(): void {
    console.log('cancel');
    this.closeModal.emit();
    this.clearModal.emit();
  }

  onRefresh(): void {
    // Logic to reload the content inside the modal
    console.log('Refreshing content inside modal...');
    // Example: You can put the logic here to reload the data from the external source
    // Example: You can also update the content directly here
  }

  onMinimize(): void {
    console.log('minimized');
    
    this.isModalMinimized = true;
    this.minimizeModal.emit(true);
  }

  onMaximize(): void {
    this.isMaximized = !this.isMaximized;
  }
 }
