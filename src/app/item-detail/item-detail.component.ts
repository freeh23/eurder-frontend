import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService,
              private location: Location) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.itemService.getItem(id).subscribe(
        item => this.item = item
      );
      console.log(`item ${id} called`);
    }
  }

  goBack(): void {
    console.log('go back used');
    this.location.back();
  }

}
