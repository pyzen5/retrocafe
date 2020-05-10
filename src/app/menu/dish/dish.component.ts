import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  avgRating;
  totalComments;
  dish = {
    imagepath: 'fruitbowl.jpg',
    name: 'Fruit Bowl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.',
    comments: [
      {user: 'John', rating: 4.5, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris elit, pretium pharetra leo in, efficitur lacinia arcu.', time: '18-Mar-2020'},
      {user: 'Bob', rating: 5, comment: 'Nunc a facilisis erat. Nam non risus pretium, finibus felis quis, dictum justo.', time: '20-Mar-2020'},
      {user: 'Doe', rating: 5, comment: 'Sed erat tellus, rhoncus eget augue quis, faucibus blandit nibh.', time: '25-Mar-2020'}
    ]
  };
  constructor() {
    this.totalComments = this.dish.comments.length;
    const totalRating = this.dish.comments.reduce((acc, cur) => acc + cur.rating, 0);
    this.avgRating = totalRating / this.totalComments;
  }

  ngOnInit(): void {
  }

}
