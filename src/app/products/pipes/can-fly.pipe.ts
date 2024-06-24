import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'fly' | 'no fly' {
    return value ? 'fly' : 'no fly';
  }
}
