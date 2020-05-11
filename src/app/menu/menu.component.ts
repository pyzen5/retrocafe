import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: Dish[];
  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getMenuList().subscribe(data => this.menuList = data, error => console.log('error'));
    // this.router.navigate(['dish'])
  }

}
