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
  
  showModalFlag: boolean = false;
  showChatbot: boolean = true;
  chatbotButtonText: string = 'Get Started';

  constructor() { }

  showModal() {
    this.showModalFlag = true;
    this.showChatbot = false;
  }

  closeModal() {
    this.showModalFlag = false;
    this.showChatbot = true;
  }

  buttonClicked(buttonText: string) {
    this.chatbotButtonText = buttonText;
    if (buttonText === 'Continue') {
      this.showModal();
    }
  }

  // resetChatbotText() {
  //   this.chatbotButtonText = 'Get Started';
  // }

  minimizeChatbotText() {
    this.showChatbot = true;
    this.chatbotButtonText = 'Continue'; 
  }
}
