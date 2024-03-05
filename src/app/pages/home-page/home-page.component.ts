import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { SectionOneComponent } from './sections/section-one/section-one.component';
import { SectionTwoComponent } from './sections/section-two/section-two.component';
import { AboutComponent } from '../about/about.component';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [
    RouterLink,
    CommonModule,
    HeroSectionComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutComponent,
    ChatBotComponent,
    ModalComponent,
  ],
})
export class HomePageComponent {
  
  isModalVisible: boolean = false;
  chatButtonText: string = 'Get Started';
  isChatButtonVisible: boolean = true;

  constructor() { }

  toggleModalVisibility(): void {
    this.isModalVisible = !this.isModalVisible;
    this.isChatButtonVisible = !this.isModalVisible;
    this.chatButtonText = this.isModalVisible ? 'Get Started' : 'Continue';
  }

  clearModal(): void {
    this.isModalVisible = false;
    this.isChatButtonVisible = true;
    this.chatButtonText = 'Get Started';
  }
}
