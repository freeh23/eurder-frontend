import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";
import {Item} from "../../model/Item";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  items: Item[];

  constructor(private itemService : ItemService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() : void {
    this.itemService.getItems().subscribe(
      items => this.items = items);
  }

}
