import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.model';

export const loadItems = createAction('[Items] Load Items');
export const loadItemsSuccess = createAction('[Items] Load Items Success', props<{ data: Item[] }>());
export const loadItemsFailure = createAction('[Items] Load Items Failure', props<{ error: string }>());
export const addItem = createAction('[Items] Add Items', props<{ data: Item }>());
export const addItemSuccess = createAction('[Items] Load Items Success', props<{ data: Item }>());
export const addItemFailure = createAction('[Items] Load Items Failure', props<{ error: string }>());
