import { Component } from '@angular/core';
import { ChatBotComponent } from '../../../../components/chat-bot/chat-bot.component';
import { AboutComponent } from '../../../about/about.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  imports: [ChatBotComponent, AboutComponent],
})
export class HeroSectionComponent {
  // hideGetStarted: boolean = false;
  // handleClickEvent(currentState: boolean) {
  //   this.hideGetStarted = currentState;
  //   // alert(currentState);
  // }
}
