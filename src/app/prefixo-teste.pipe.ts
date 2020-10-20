import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixoTeste',
  pure:true
})
export class PrefixoTestePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
	  console.log(value);
    return "testePipe__" + value ;
  }

}
