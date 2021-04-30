import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pokemones',
    loadChildren: () => import('./components/all-pokemon/all-pokemon.module').then(m => m.AllPokemonModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./components/pokemon/pokemon.module').then(m => m.PokemonModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
