import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPokemonComponent,
    PokemonComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,

    NgImageSliderModule,
    NgxPaginationModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
