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

    this._pokemonService.allPokemons("10").subscribe(
      (data) => {
        data.results.forEach(
          element => {
            this._pokemonService.getPokemon(element.name).subscribe(
              (pokemon) => {
                
                this.arrayPokemon.push({
                  "image": pokemon.sprites.front_default,
                  "thumbImage": pokemon.sprites.front_default,
                  "alt": "Pokemon",
                  "title": pokemon.name
                })
                
              }
            )
          }
        )
      }, (error) => {

      }
    )
    
  }

}
