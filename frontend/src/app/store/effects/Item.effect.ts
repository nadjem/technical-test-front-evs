import {inject, Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from '@ngrx/effects';
import  * as ItemAction  from '../actions';
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {ItemsService} from "../../services/items.service";
import {Item} from "../../models/item.model";
@Injectable()
export class ItemEffects {
  private actions$ = inject(Actions);
  private itemService = inject(ItemsService);
  constructor(
  ) {}
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemAction.loadItems),
      mergeMap(() => {
          return this.itemService.getItems().pipe(
            map((data:Array<Item>) => ItemAction.loadItemsSuccess({data}),),
            catchError((error) =>
              of(ItemAction.loadItemsFailure({error: error.message}))
            )
          );
        }
      )
    )
  );

}
