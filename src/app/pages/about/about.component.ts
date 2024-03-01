import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @Output() closeIcon = new EventEmitter<boolean>();

  closeChatDialogModal() {
    this.closeIcon.emit(false);
  }
}
