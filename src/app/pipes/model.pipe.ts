import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'model'
})
export class ModelPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let model = '';
    let potMax = '';
    let potMIn = '';
    let frecMax = '';
    let frecMin = '';
    if(value) {
      if( value.indexOf('GADTEST') > -1 ) model = 'Alta';
      else model = 'Media';
      if( !args ) return model;
      else {
        if( args === 'potMax' ) {
          if( model === 'Alta' ) return '8';
          else return '5'
        }
        else if( args === 'potMin' ) return '0';
        else if( args === 'frecMax' ) {
          if( model === 'Alta' ) return '13,5 kHz';
          else return '10,5 kHz';
        }
        else return '6,5 kHz';
      }
    }else return 'Sin info...';
  }

}
