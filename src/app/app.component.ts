import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListChartersComponent } from "./list-charters/list-charters.component";
import { FavoriteChartersListComponent } from './favorite-charters-list/favorite-charters-list.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListChartersComponent, FavoriteChartersListComponent]
})
export class AppComponent {
  title = 'tpeSeminario';
}
