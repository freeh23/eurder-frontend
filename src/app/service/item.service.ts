import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {Item} from "../model/Item";
import {CreateItem} from "../model/CreateItem";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get(this.url);
  }

  getItem(id: string): Observable<Item> {
    const itemUrl = this.url + '/' + id;
    return this.http.get<Item>(itemUrl);
  }


  updateItem(item: Item): Observable<any> {
    const itemUrl = this.url + '/' + item.id;
    return this.http.put(itemUrl, item, this.httpOptions);

  }

  createItem(newItem: CreateItem): Observable<Item> {
    return this.http.post<Item>(this.url, newItem, this.httpOptions);
  }
}
