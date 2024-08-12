import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ListItemComponent} from "../../components/list-item/list-item.component";
import {AppModule} from "../../app.module";
import {ItemFormComponent} from "../../components/item-form/item-form.component";


@NgModule({
  declarations: [
    HomeComponent,
    ListItemComponent,
    ItemFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
