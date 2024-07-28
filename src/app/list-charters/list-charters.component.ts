import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Charter } from './Charter';
import { FavoriteChartersService } from '../services/favorite-charters.service';
import { DataCharterServices } from '../services/api-data-service.service';

@Component({
  selector: 'app-list-charters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-charters.component.html',
  styleUrl: './list-charters.component.css'
})
export class ListChartersComponent {
  charters: Charter[]=[]

    constructor(private favorites:FavoriteChartersService, private listChartersServis:DataCharterServices ){{

    }}

    ngOnInit(): void{
      this.listChartersServis.getCharacters()
      .subscribe(charter=>this.charters=charter)
    }

    addToFavorite(charter:Charter){
        this.favorites.addToFavorite(charter);
    }
}
