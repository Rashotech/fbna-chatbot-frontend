import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen: boolean = true;
  // menuClose: boolean = true;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    // this.menuOpen = !this.menuOpen;
  }
}
