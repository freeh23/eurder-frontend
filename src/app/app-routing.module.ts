import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./layout/item-overview/item-overview.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  {path: '', redirectTo:"/items", pathMatch:'full'},
  {path: 'items', component: ItemOverviewComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'create-item', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
