import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  { path: 'dish', component: DishComponent },
  { path: '', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
