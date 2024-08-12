import {Component, inject, OnInit} from '@angular/core';
import  { ItemsService} from "./services/items.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  ngOnInit() {

  }
}
