import {Component, OnInit} from '@angular/core';
// @ts-ignore
import M from 'materialize-css';
import {Observable} from "rxjs";
import {Category} from "../shared/interfaces";
import {CategoriesServices} from "../shared/services/categories.services";


@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  // @ts-ignore
  categories$: Observable<Category[]>
  options = {fullWidth: false};
  items = [
    'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2',
    'https://picsum.photos/200/300?image=3',
    'https://picsum.photos/200/300?image=4'
  ];
  // @ts-ignore
  results: Category[];


  constructor(private categoriesService: CategoriesServices) {

  }

  ngOnInit(): void {

  }


    ngAfterViewInit()
    {
      let elems = document.querySelectorAll('.carousel');
      let instances = M.Carousel.init(elems, this.options);

    }

  }
