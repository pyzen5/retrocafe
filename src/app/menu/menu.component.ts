import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Dish } from '../models/dish';
import { Store } from '@ngrx/store';
import { IAppState } from '../ngrx/state/app.state';
import * as MenuActions from '../ngrx/actions/menu.actions';
import { Subscription, of, interval } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuList: Dish[];
  subscription$: Subscription;
  constructor(private router: Router, private backendService: BackendService, private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(MenuActions.GetMenu());
    this.subscription$ = this.store.subscribe(data => {
      this.menuList = data.menu;
    });
    // sample for multiple subscription
    const observable = of([1, 2, 3]);
    const subscription1$ = observable.subscribe(x => console.log(x));
    // adding child subsciber to parent
    this.subscription$.add(subscription1$);
    // this.backendService.getMenuList().subscribe(data => this.menuList = data, error => console.log('error'));
  }

  ngOnDestroy() {
    // unsubscribing the parent will unsubscribe the child as well
    this.subscription$.unsubscribe();
  }

}
