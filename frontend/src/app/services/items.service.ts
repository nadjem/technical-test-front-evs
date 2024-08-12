import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private http = inject(HttpClient);

  constructor() { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/api/items');
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:3000/api/items', item);
  }
}
