import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsStoragePluginModule, StorageOption} from "@ngxs/storage-plugin";
import {HeaderModule} from "./modules/header/header.module";
import {AppComponent} from "./components/app/app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {NgxsActionsExecutingModule} from "@ngxs-labs/actions-executing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxsModule.forRoot([],
      {
        developmentMode: true
      }
    ),
    NgxsLoggerPluginModule.forRoot({
      disabled: false
    }),
    NgxsActionsExecutingModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage
    }),
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
