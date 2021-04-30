// Angular Imports
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Components
import { NavigationBarComponent } from "./navigation-bar.component";

@NgModule({

    declarations: [
        NavigationBarComponent
    ],
    imports: [
        CommonModule,
    ],
    exports:[
        NavigationBarComponent
    ],
    entryComponents: [
        
    ]

})

export class NavigationBarModule {}