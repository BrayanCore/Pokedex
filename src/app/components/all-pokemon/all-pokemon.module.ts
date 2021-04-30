// Angular Imports
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

//  Components
import { AllPokemonComponent } from "./all-pokemon.component";

// Modules
import { NavigationBarModule } from "../navigation-bar/navigation-bar.module";

// Extern libraries
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
    {
        path: '',
        component: AllPokemonComponent
    }
];

@NgModule({

    declarations: [
        AllPokemonComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        CommonModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule,

        NavigationBarModule,

        NgxPaginationModule,
        
    ],
    exports:[

    ],
    entryComponents: [
        AllPokemonComponent
    ]

})

export class AllPokemonModule {}