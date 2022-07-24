import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategoriesServices} from "../../shared/services/categories.services";
import {Category} from "../../shared/interfaces";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-order-categories',
  templateUrl: './order-categories.component.html',
  styleUrls: ['./order-categories.component.css']
})

export class OrderCategoriesComponent implements OnInit {

  // @ts-ignore
  categories$: Observable<Category[]>
  // @ts-ignore
  results: Category[];
  paExp = false


  constructor(private categoriesService: CategoriesServices,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch()
    // this.categories$.subscribe(
    //   data => {
    //     this.results = data
    //     console.log(this.results,'ss')
    //     console.log(this.results[0],'ss')
    //     console.log(this.results[1],'ss')
    //     data.map((index,i,)=>{
    //       //console.log(index)
    //       console.log(index.specialty)
    //       console.log(index.matherInfo)

      //   })
      // }
    // )


  }


  // generatePDF1() {
  //
  // }
  tern: any;



}
