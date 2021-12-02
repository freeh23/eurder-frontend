import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { ItemOverviewComponent } from './item-overview/item-overview.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ItemOverviewComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
      RouterModule
    ]
})
export class LayoutModule { }
