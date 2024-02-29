import { Component } from '@angular/core';
import { CardComponent } from "../../../../components/card/card.component";

@Component({
    selector: 'app-section-one',
    standalone: true,
    templateUrl: './section-one.component.html',
    styleUrl: './section-one.component.css',
    imports: [CardComponent]
})
export class SectionOneComponent {

}
