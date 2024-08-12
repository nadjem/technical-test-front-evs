import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ListItemComponent} from "../../components/list-item/list-item.component";


@NgModule({
  declarations: [
    HomeComponent,
    ListItemComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
