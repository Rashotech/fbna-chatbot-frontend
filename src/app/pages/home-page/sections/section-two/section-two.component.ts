import { Component } from '@angular/core';
import { CardComponent } from "../../../../components/card/card.component";

@Component({
    selector: 'app-section-two',
    standalone: true,
    templateUrl: './section-two.component.html',
    styleUrl: './section-two.component.css',
    imports: [CardComponent]
})
export class SectionTwoComponent {

}
