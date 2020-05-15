import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { DishComponent } from './dish/dish.component';
import { NgmatModule } from '../ngmat/ngmat.module';

@NgModule({
  declarations: [MenuComponent, DishComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    NgmatModule
  ]
})
export class MenuModule { }
