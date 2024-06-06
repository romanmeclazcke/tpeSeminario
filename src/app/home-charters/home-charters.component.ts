import { Component } from '@angular/core';
import { ListChartersComponent } from "../list-charters/list-charters.component";
import { FavoriteChartersListComponent } from "../favorite-charters-list/favorite-charters-list.component";

@Component({
    selector: 'app-home-charters',
    standalone: true,
    templateUrl: './home-charters.component.html',
    styleUrl: './home-charters.component.css',
    imports: [ListChartersComponent, FavoriteChartersListComponent]
})
export class HomeChartersComponent {

}
