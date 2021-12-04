import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  detailMode: boolean = true;
  updateMode: boolean = false;
  item: Item | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService,
              private location: Location,
              private router: Router) {}

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

  enableUpdateMode() : void {
    this.detailMode = false;
    this.updateMode = true;
  }

  cancelUpdate(id: string): void {
    this.router.navigate(['/items', id]);
  }

}