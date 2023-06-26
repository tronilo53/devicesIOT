import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'model'
})
export class ModelPipe implements PipeTransform {

  transform(value: string): string {
    let model = 'Test';
    if(value) {
      if( value.indexOf('GADTEST') > -1 ) model = 'Alta';
      else model = 'Media';
    }
    return model;
  }

}
