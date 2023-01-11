import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform {

  transform(list: any[], property: string): any[] {
    return list.reduce((a, b) => a + b[property], 0);
  }

}
