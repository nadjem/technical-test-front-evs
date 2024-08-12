import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {provideHttpClient} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {itemReducer} from "./store/reducers";
import {ItemEffects} from "./store/effects/Item.effect";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({items:itemReducer}),
    EffectsModule.forRoot([ItemEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25}),
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
