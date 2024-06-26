import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutSerieComponent } from "./about-serie/about-serie.component";
import { HomeChartersComponent } from "./home-charters/home-charters.component";





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutSerieComponent, HomeChartersComponent,RouterModule]
})
export class AppComponent {
  title = 'tpeSeminario';
}
