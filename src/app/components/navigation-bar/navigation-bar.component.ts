import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  // Received from component which is using this navigator
  @Input() routesNavigation: string[];

  // Link availables, should make match with routesNavigatiom
  links: string[] = ["Menú Principal", "Cátalogo", "Favoritos"];

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {
    
  }

  goToSection(section: string) {

    switch (section) {
      case this.links[1]:
        
        this._router.navigate(
          [`/pokemones`]
        );
        break;

      case this.links[2]:

        this._router.navigate(
            [`/pokemones`],
            { queryParams: { favorites: true } },
        );
        
        break;
      
      default:
        this._router.navigate(
          [``],
        ); 
        break;
    }

  }

}
