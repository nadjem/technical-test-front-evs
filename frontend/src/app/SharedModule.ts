import {NgModule} from "@angular/core";
import {ItemFormComponent} from "./components/item-form/item-form.component";
import {ListItemComponent} from "./components/list-item/list-item.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ ItemFormComponent, ListItemComponent ],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [ ItemFormComponent, ListItemComponent ]
})
export class SharedModule { }
