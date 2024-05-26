import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Charter } from './Charter';

@Component({
  selector: 'app-list-charters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-charters.component.html',
  styleUrl: './list-charters.component.css'
})
export class ListChartersComponent {
  charters: Charter[]=[
    {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
];
}
