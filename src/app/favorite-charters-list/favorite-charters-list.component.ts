import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Charter } from '../list-charters/Charter';
import { FavoriteChartersService } from '../services/favorite-charters.service';

@Component({
  selector: 'app-list-favorite-charters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-charters-list.component.html',
  styleUrl: './favorite-charters-list.component.css'
})
export class FavoriteChartersListComponent {
  chartersFavorite: Charter[]=[]
  constructor(private favorites: FavoriteChartersService){
    this.chartersFavorite = this.favorites.listFavoriteCharters;
  }


  removeToFavorite(charter:Charter){
    this.favorites.removeToFavorite(charter);
  }
}
