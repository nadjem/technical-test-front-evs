import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import {SharedModule} from "../../SharedModule";


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    SharedModule
  ]
})
export class AddModule { }
