import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";
import {Item} from "../../model/Item";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  items: Item[];
  private searchTerms = new Subject<string>();
  searchText: string;


  constructor(private itemService : ItemService) {
    this.items = [];
    this.searchText = "";
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() : void {
    console.log("get all items is called.")
    this.itemService.getItems().subscribe(
      items => this.items = items);
  }

  search(term: string) : void {
    this.searchTerms.next(term);
  }

}
