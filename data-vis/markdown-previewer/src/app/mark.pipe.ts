import { Pipe, PipeTransform } from '@angular/core';
var marked = require('marked');

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    marked.setOptions({ sanitize: true});
    return marked(value);
  }

}
