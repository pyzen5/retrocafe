import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredDish: Dish;
  constructor(public backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getFeaturedDish().subscribe(data => this.featuredDish = data, err => console.log(err));
  }

}
