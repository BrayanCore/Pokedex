import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  links: string[] = ["Menú Principal", "Cátalogo", "Favoritos"];

  constructor() { }

  ngOnInit(): void {
  }

}
