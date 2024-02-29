import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";
import { SectionOneComponent } from "./sections/section-one/section-one.component";
import { SectionTwoComponent } from "./sections/section-two/section-two.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [RouterLink, HeroSectionComponent, SectionOneComponent, SectionTwoComponent]
})
export class HomePageComponent {

}
