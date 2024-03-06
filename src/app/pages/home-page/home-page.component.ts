import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { SectionOneComponent } from './sections/section-one/section-one.component';
import { SectionTwoComponent } from './sections/section-two/section-two.component';
import { AboutComponent } from '../about/about.component';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IChatBotState } from '../../states/chatbot/chatbot.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [
    CommonModule,
    RouterLink,
    HeroSectionComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutComponent,
    ChatBotComponent,
    ModalComponent,
  ],
})
export class HomePageComponent {
  hideChatDialog: boolean = true;
  hideGetStarted: boolean = false;
  getStartedBtnState: boolean = false;
  minimizeChatDialog: boolean = true;

  private store = inject(Store);
  status$: Observable<IChatBotState>;

  constructor() {
    this.status$ = this.store.select('chatbot');
    this.status$.subscribe((state) => {
      this.hideChatDialog = state.hidden;
      this.minimizeChatDialog = state.minimize;
    });
  }

  ngOnInit() {
    this.status$.subscribe((state) => {
      console.log('Current Status:', state.status);
    });
  }

  handleClickEvent(currentState: boolean) {
    // alert(currentState);
    this.hideChatDialog = !currentState;
    this.hideGetStarted = currentState;
    this.getStartedBtnState = false;
  }

  handleMinimiseEvent(state: boolean) {
    this.getStartedBtnState = state;
  }
}
