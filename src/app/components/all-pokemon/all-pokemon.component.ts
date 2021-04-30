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
        this.modeFavorites();
      
      } else {

        this.routesNavigation = ["Menú Principal", "Favoritos"];
        this.favoritesMode = false;
        // Load initial pokemon
        this.allPokemon();
      
      }

    });
    
  }

  ngOnInit(): void {}

  // * METHODS SHARED( FAVORITES AND CATALOG MODE )
  
  // Go to component to watch details pokemon
  goDetailsPokemon(idPokemon: string) {

    this._router.navigate(
      [`pokemon`],
      { queryParams: { id: idPokemon } }
    );

  };

  // * METHODS TO CATALOG MODE

  allPokemon() {

    // Empty the list to be reloaded after request
    this.listPokemon = [];

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

  // Add pokemon clicked to list pokemon located on service
  addLikeFavorite(pokemon: PokemonCustom) { this._pokemonService.favoritesPokemon.push(pokemon); }

  // Method to verify if a pokemon is on the list of favorites pokemon
  isFavorite(id: number) {
    return this._pokemonService.favoritesPokemon.some(pokemon => pokemon.id == id);
  }

  // * METHODS TO FAVORITES POKEMON MODE

  // Method to update listPokemon based on list located in service, and too update quantity pokemon to pagination
  modeFavorites() {
    this.listPokemon = this._pokemonService.favoritesPokemon.map(object => ({ ...object }));
    this.quantityPokemon = Object.assign({}, this._pokemonService.favoritesPokemon.length);
  }

  // Remove pokemon clicked from favorite pokemon list located on pokemon service
  removeFromFavorites(idPokemon: number) {
    this._pokemonService.favoritesPokemon = this._pokemonService.favoritesPokemon.filter(pokemon => pokemon.id != idPokemon);
    this.modeFavorites();
  }

}
