import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes = [{
    imagepath: 'chapati.jpg',
    name: 'Chapati',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'cookies.jpg',
    name: 'Cookies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'fruitbowl.jpg',
    name: 'Fruit Bowl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'kulcha.jpg',
    name: 'Kulcha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'macaroni.jpg',
    name: 'Macaroni',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'pancake.jpg',
    name: 'Pancake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'pizza.jpg',
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  },
  {
    imagepath: 'roticurry.jpg',
    name: 'Roti curry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.'
  }];
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.router.navigate(['dish'])
  }

}
