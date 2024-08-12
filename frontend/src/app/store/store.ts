import {itemReducer, ItemState} from "./reducers";
import {ActionReducer, Action} from "@ngrx/store";
import {ItemEffects} from "./effects/Item.effect";

export interface AppState {
  item: ItemState
}

export interface AppStore {
  item: ActionReducer<ItemState, Action>;
}

export const appStore: AppStore = {
  item: itemReducer
}

export const appEffects = [ItemEffects];
