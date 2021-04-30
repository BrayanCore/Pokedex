// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { PokemonDetailed } from 'src/app/models/pokemon-detailed';

// Services
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  // Routes by default to navigate
  routesNavigation: string[] = ["Menú Principal", "Cátalogo", "Favoritos"];

  // ID by default, variable used to indicate ID pokemon
  id: string = "1";

  // Initialize a pokemon while request is executed
  pokemon: PokemonDetailed = new PokemonDetailed(0, "", "", "", 0, 0, 0, 0, 0, 0);

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _pokemonService: PokemonService,
  ) {

    // Get the ID from URL(query param)
    this.id = this._activatedRouter.snapshot.queryParams.id;

  }

  ngOnInit(): void {

    // Send ID pokemon to get its information
    this._pokemonService.getPokemonDetailed(this.id).subscribe(
      (pokemon) => {
        this.pokemon = pokemon;
      }
    );

  }

}
