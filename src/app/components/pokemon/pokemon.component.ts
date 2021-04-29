import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  // Routes by default to navigate
  routesNavigation: string[] = ["Menú Principal", "Cátalogo", "Favoritos"];

  id: string = "";

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _pokemonService: PokemonService,
  ) {

    // Get the ID from URL param
    this.id = this._activatedRouter.snapshot.params.id;

  }

  ngOnInit(): void {

    this._pokemonService.getPokemon(this.id).subscribe(
      (res) => {
        console.log(res);
      }
    );

  }

}
