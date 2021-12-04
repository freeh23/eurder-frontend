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
  id?: string | null;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService,
              private location: Location,
              private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getItem();
  }

  getItem(): void {

    if (this.id != null) {
      this.itemService.getItem(this.id).subscribe(
        item => this.item = item
      );
      console.log(`item ${this.id} called`);
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
    //this.router.navigate(['/items', id]);
    this.reloadComponent();
  }

  updateItem(): void {
    if(this.item) {
      this.itemService.updateItem(this.item).subscribe(
        () => this.reloadComponent());
      console.log("update method called")
    }
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
