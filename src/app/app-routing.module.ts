import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemones',
    component: AllPokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
