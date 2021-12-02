import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./layout/item-overview/item-overview.component";
import {CreateItemComponent} from "./layout/create-item/create-item.component";

const routes: Routes = [
  {path: '', component: ItemOverviewComponent},
  {path: 'createItem', component: CreateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
