import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen: boolean = true;
  // menuClose: boolean = true;
  

  toggleMenu() {
    
    this.menuOpen = !this.menuOpen;
    // this.menuOpen = !this.menuOpen;
    
  }
}
