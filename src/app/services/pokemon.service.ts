import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { BehaviorSubject } from 'rxjs';
import { map, tap, filter, scan, retry, catchError } from 'rxjs/operators';

const url_api = environment.api;
@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private readonly _currentPokemon = new BehaviorSubject<Pokemon>(null);
  private readonly _allPokemon = new BehaviorSubject<Pokemon[]>([]);
  private readonly _favoritePokemon = new BehaviorSubject<Pokemon[]>([]);

  readonly currentPokemon$ = this._currentPokemon.asObservable();
  readonly allPokemon$ = this._allPokemon.asObservable();
  readonly favoritePokemon$ = this._favoritePokemon.asObservable();

  allPokemon: Pokemon[] = [];
  favoritePokemon: Pokemon[] = [];

  constructor(

    private http: HttpClient,
  
  ) {

  }

  allPokemons(limit: string) {
    return this.http.get<any>(`${url_api}pokemon?limit=${limit}`);
  }

  getPokemon(id: string) {
    return this.http.get<any>(`${url_api}pokemon/${id}`);
  }

}
