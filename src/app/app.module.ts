import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
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
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {ErrorHandlerInterceptor} from "./interceptors/error-handler.interceptor";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
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
    NgxsRouterPluginModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage
    }),
    HeaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
