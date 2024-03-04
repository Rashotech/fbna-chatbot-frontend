import { Component} from '@angular/core';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ChatBotComponent,],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  
})
export class AboutComponent {}
