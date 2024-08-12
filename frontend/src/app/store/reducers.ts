import {Item} from "../models/item.model";
import {createReducer, on} from "@ngrx/store";
import * as ItemAction from "./actions";

export interface ItemState {
  data: Item[];
  loading: boolean;
  error: string;
}
export const initialState: ItemState = {
  data: [],
  loading: false,
  error: ''
};

export const itemReducer = createReducer(
  initialState,
  on(ItemAction.loadItems, state => ({
    ...state,
    loading: true,
    error: ''
  })),
  on(ItemAction.loadItemsSuccess, (state, { data }) => ({
    ...state,
    data: data,
    loading: false,
    error: ''
  })),
  on(ItemAction.loadItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(ItemAction.addItems, (state, { data }) => ({
    ...state,
    data: [...state.data, data],
    loading: false,
    error: ''
  }))
);
