// Angular Imports
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

// Components
import { HomeComponent } from "./home.component";

// Extern Libraries
import { NgImageSliderModule } from 'ng-image-slider';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({

    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        CommonModule,
        MatIconModule,
        HttpClientModule,

        NgImageSliderModule
    ],
    exports:[

    ],
    entryComponents: [
        HomeComponent
    ]

})

export class HomeModule {}