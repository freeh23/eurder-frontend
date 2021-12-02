import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../model/Item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], filterWord: string): Item[] {
    filterWord = filterWord.toLowerCase();
    return items.filter(pet => pet.name.toLowerCase().includes(filterWord));
  }

}
