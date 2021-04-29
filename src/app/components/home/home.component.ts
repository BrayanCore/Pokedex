import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayPokemon: Array<object> = [];

  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {

    // Request to load images in gallery
    this._pokemonService.getPokemons(12, 0).subscribe(
      (data) => {

        // data.allPokemons contain the name and url of all pokemon returned in getPokemons request
        data.allPokemons.forEach(element => {
          this._pokemonService.getPokemon(element.name).subscribe(
            (pokemon) => {
              
              // Push every pokemon with format required by library used to gallery
              this.arrayPokemon.push(
                {
                  "image": pokemon.image,
                  "thumbImage": pokemon.image,
                  "alt": "Pokemon",
                  "title": pokemon.name
                }
              )

            }
          )
        });

      }
    );
    
  }

}
