import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dece'
})
export class DecePipe implements PipeTransform {

  transform(value: string  , argu: number): any {

if (value.length > argu) {
  return `${value.slice(0 , argu)}... `

}else return value
  }

}
