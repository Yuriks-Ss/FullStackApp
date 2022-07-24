import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RegisterPageComponent} from './register-page/register-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {LoginPagesComponent} from './login-pages/login-pages.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthLayoutComponent} from './shared/layoutss/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layoutss/site-layout/site-layout.component';
import {TokenInterceptor} from "./shared/classes/token.interseptor";
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {AuthGuard} from "./shared/classes/auth.guard";
import {OrderPageComponent} from './order-page/order-page.component';
import {CategoriesPageComponent} from './categories-page/categories-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import {NgxPrintModule} from "ngx-print";
import { AboutComponent } from './about/about.component';
import {OrderCategoriesComponent} from "./order-page/order-categories/order-categories.component";
import { FilterPipe } from './shared/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    OrderCategoriesComponent,
    LoginPagesComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    OrderPageComponent,
    CategoriesPageComponent,
    LoaderComponent,
    CategoriesFormComponent,
    AboutComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,


  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
