import {Component, OnInit} from '@angular/core';
import {CategoriesServices} from "../shared/services/categories.services";
import {Category} from "../shared/interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
// stream
  // @ts-ignore
  categories$: Observable<Category[]>
  tern: any;
  

  constructor(private categoriesService: CategoriesServices) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.fetch()

  }

}
