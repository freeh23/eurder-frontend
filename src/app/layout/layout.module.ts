import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "./pipes/name-filter.pipe";
import { CreateItemComponent } from './create-item/create-item.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ItemOverviewComponent,
      NameFilterPipe,
      CreateItemComponent,
      CustomerOverviewComponent,
      CustomerDetailComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutModule { }
