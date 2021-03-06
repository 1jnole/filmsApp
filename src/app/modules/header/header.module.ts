import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/container/header/header.component';
import {RouterModule} from "@angular/router";
import { LinksComponent } from './components/presentational/links/links.component';
import { LogosComponent } from './components/presentational/logos/logos.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    HeaderComponent,
    LinksComponent,
    LogosComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ]
})
export class HeaderModule { }
