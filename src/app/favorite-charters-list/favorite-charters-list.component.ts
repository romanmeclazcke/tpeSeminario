import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Charter } from '../list-charters/Charter';
import { FavoriteChartersService } from '../favorite-charters.service';

@Component({
  selector: 'app-list-favorite-charters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-charters-list.component.html',
  styleUrl: './favorite-charters-list.component.css'
})
export class FavoriteChartersListComponent {
  chartersFavorite: Charter[]=[
    {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }
  ]
  constructor(private favorites: FavoriteChartersService){

  }


  removeToFavorite(charter:Charter){
    this.favorites.removeToFavorite(charter);
  }
}
