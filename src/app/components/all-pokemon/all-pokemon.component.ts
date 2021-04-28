import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.scss']
})
export class AllPokemonComponent implements OnInit {

  list: any[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor(
    private _pokemonService: PokemonService
  ) { 
    
  }

  ngOnInit(): void {

    this._pokemonService.allPokemons("10").subscribe(
      (data) => {
        data.results.forEach(
          element => {
            this._pokemonService.getPokemon(element.name).subscribe(
              (pokemon) => {
                // this.test.push(pokemon);
              }
            )
          }
        )
      }, (error) => {

      }
    )

    this._pokemonService.getPokemon("1").subscribe(
      (data) => {
        console.log(data);
      }, (error) => {

      }
    )

  }

}
