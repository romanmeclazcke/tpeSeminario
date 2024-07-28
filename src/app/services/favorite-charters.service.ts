import { Injectable } from '@angular/core';
import { Charter } from '../list-charters/Charter';

@Injectable({
  providedIn: 'root'
})
export class FavoriteChartersService {
  listFavoriteCharters: Charter[]=[];

  constructor() { }

  addToFavorite(charter:Charter){
    let item: Charter | undefined= this.listFavoriteCharters.find((ch)=>ch.name== charter.name);
    if(item==undefined){
       this.listFavoriteCharters.push(charter);
    }
  }

  removeToFavorite(charter:Charter){
    let index:number= this.listFavoriteCharters.findIndex((ch)=>ch.name== charter.name);
    if(index!=-1){
      this.listFavoriteCharters.splice(index,1);
    }
  }
}
