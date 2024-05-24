import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailUsername',
})
export class EmailUsernamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const [username] = value.split('@');
    return username;
  }
}
