import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get(this.url);
  }
}
