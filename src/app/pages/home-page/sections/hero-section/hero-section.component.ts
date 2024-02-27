import { Component } from '@angular/core';
import { ChatBotComponent } from "../../../../components/chat-bot/chat-bot.component";

@Component({
    selector: 'app-hero-section',
    standalone: true,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css',
    imports: [ChatBotComponent]
})
export class HeroSectionComponent {

}
