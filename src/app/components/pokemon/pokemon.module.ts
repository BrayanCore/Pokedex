// Angular Imports
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

// Modules
import { NavigationBarModule } from "../navigation-bar/navigation-bar.module";

// Components
import { PokemonComponent } from "./pokemon.component";

const appRoutes: Routes = [
    {
        path: '',
        component: PokemonComponent
    }
];

@NgModule({

    declarations: [
        PokemonComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        CommonModule,
        HttpClientModule,

        NavigationBarModule
    ],
    exports:[

    ],
    entryComponents: [
        
    ]

})

export class PokemonModule {}