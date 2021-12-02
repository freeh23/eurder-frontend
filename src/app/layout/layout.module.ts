import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "./pipes/name-filter.pipe";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ItemOverviewComponent,
      NameFilterPipe
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
