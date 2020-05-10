import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes = [{
    imagepath: 'chapati.jpg'
  },
  {
    imagepath: 'cookies.jpg'
  },
  {
    imagepath: 'fruitbowl.jpg'
  },
  {
    imagepath: 'kulcha.jpg'
  },
  {
    imagepath: 'macaroni.jpg'
  },
  {
    imagepath: 'pancake.jpg'
  },
  {
    imagepath: 'pizza.jpg'
  },
  {
    imagepath: 'roticurry.jpg'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
