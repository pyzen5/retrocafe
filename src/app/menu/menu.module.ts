import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [MenuComponent, DishComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class MenuModule { }
