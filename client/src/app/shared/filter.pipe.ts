import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(categories: any, tern: any): any {
    //check is
    if (tern === undefined) return categories
    // return
    // @ts-ignore
    return categories.filter((category) => {
      return category.surname.toLowerCase().includes(tern.toLowerCase()) | category.telephone.toLowerCase().includes(tern.toLowerCase())
    })
  }

}
