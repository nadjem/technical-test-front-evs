import { Component, inject, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as ItemAction from "../../store/actions";
import {Item} from "../../models/item.model";
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent implements OnInit {
  private store = inject(Store)
  items$: Observable<Item[]> = this.store.select(state => state.items.data);
  isLoading$: Observable<boolean> = this.store.select(state => state.items.loading);
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.store.dispatch(ItemAction.loadItems());
  }

  protected readonly Array = Array;
}
