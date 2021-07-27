import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {environment} from "./environments/environment";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {HeaderModule} from "./modules/header/header.module";
import {AppComponent} from "./components/app/app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([],
      {
        developmentMode: true
      }
    ),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    [NgxsModule.forRoot([]), NgxsStoragePluginModule.forRoot()],
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
