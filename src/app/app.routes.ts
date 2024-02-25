import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: "", component:HomePageComponent

    },
    {
        path: "about", component: AboutComponent
    }
];

