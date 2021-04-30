// Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Application Imports
import { environment } from 'src/environments/environment';

// Model Imports
import { PokemonCustom } from '../models/pokemon';
import { PokemonDetailed } from '../models/pokemon-detailed';

// Extern Imports
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const url_api = environment.api;
@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  // Array to contain favorites pokemon of current user
  favoritesPokemon: PokemonCustom[] = [];

  constructor(

    private http: HttpClient,
  
  ) {

  }

  // id = id or name pokemon to search.
  getPokemonDetailed(id: string) {
    return this.http.get<PokemonCustom>(`${url_api}pokemon/${id}`).pipe(
      
      map(
        resp => {

          // Convert object to type PokemonDetailed
          return PokemonDetailed.detailedPokemonFromJSON(resp);
          
        }
      ),
      
      catchError( this.handleError )

    )
  }

  // id = id or name pokemon to search.
  getPokemon(id: string) {
    return this.http.get<PokemonCustom>(`${url_api}pokemon/${id}`).pipe(
      
      map(
        resp => {

          // Convert object to type PokemonCustom
          return PokemonCustom.pokemonFromJSON(resp);
        
        }
      ),
      
      catchError( this.handleError )

    )
  }

  /* 
    limit = quantity pokemon to return
    offset = quantity pokemon to skip on PokéAPI
  */
  getPokemons(limit: number, offset: number) {
    
    return this.http.get<any>(`${url_api}pokemon?limit=${limit}&offset=${offset}`).pipe(
      
      map(res => {
        let data = {
          allPokemons: res.results,
          quantity: res.count
        }
        return data;
      }),

      catchError( this.handleError )

    )

  }

  // Function to handle all errors occurred on http requests
  handleError(error: HttpErrorResponse) {

    console.log("Ocurrió un error en el servicio");
    console.warn(error);
    return throwError("Fallo en la llamada API REST");

  }

}
