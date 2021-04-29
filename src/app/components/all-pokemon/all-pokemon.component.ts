// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { PokemonCustom } from 'src/app/models/pokemon';

// Services
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.scss']
})
export class AllPokemonComponent implements OnInit {

  // Routes by default to navigate
  routesNavigation: string[] = ["Menú Principal, Favoritos"];

  // Contain all pokemon to show
  listPokemon: PokemonCustom[] = [];
  
  // Variables to pagination
  quantityPokemon: number = 0;
  page: number = 1;

  // Allow know which mode is the component
  favoritesMode: boolean = false;

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _router: Router,
    private _pokemonService: PokemonService
  ) { 

    // Code to check out if query param "favorites" apppear on URL
    this._activatedRouter.queryParams.subscribe(params => {
      
      // If exist, then change options navigation bar and mode
      if(params.favorites) {

        this.routesNavigation = ["Menú Principal", "Cátalogo"];
        this.favoritesMode = true;
      
      } else {

        this.routesNavigation = ["Menú Principal", "Favoritos"];
        this.favoritesMode = false;
      
      }

    });
    
  }

  ngOnInit(): void {

    // Load initial pokemon
    this.allPokemon();

  }


  allPokemon() {

    // Set show 12 pokemon by default and operation((12)*(this.page-1)) is to know how many pokemon skip.
    this._pokemonService.getPokemons(12, ((12)*(this.page-1))).subscribe(
      (data) => {
        
        // data.quantity = number total pokemon at PokeAPI
        this.quantityPokemon = data.quantity;

        // Iterate every pokemon to make get request and receive details of every one
        data.allPokemons.forEach(pokemon => {
          this._pokemonService.getPokemon(pokemon.name).subscribe(
            (res) => {
              // Insert every pokemon to list pokemon;
              this.listPokemon.push(res);
            }
          );
        });

      }
    );

  }

  goDetailsPokemon(id: string) {

    this._router.navigate(
      [`pokemon/${id}`],
    );

  };

}
