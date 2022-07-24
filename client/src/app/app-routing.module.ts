import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPagesComponent} from "./login-pages/login-pages.component";
import {AuthLayoutComponent} from "./shared/layoutss/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layoutss/site-layout/site-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {CategoriesFormComponent} from "./categories-page/categories-form/categories-form.component";
import {AboutComponent} from "./about/about.component";
import {OrderCategoriesComponent} from "./order-page/order-categories/order-categories.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPagesComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'about', component: AboutComponent},
      {
        path: 'order', component: OrderPageComponent, children: [
          {path: '', component: OrderCategoriesComponent}
        ]
      },
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'categories/new', component: CategoriesFormComponent},
      {path: 'categories/:id', component: CategoriesFormComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
