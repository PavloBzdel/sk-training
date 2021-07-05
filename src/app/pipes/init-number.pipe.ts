import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initNumber'
})
export class InitNumberPipe implements PipeTransform {

  transform(init: number): string {
    if(init>0){
      return('positive')
    }else{
      return('negative')
    }
  }

}
