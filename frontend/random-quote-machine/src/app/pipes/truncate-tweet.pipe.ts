import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateTweet'
})
export class TruncateTweetPipe implements PipeTransform {

  transform(value: string): string {
    value = "https://twitter.com/intent/tweet?via=P1xt&hashtags=FreeCodeCamp&text=" + value;
    const num = 185;
    if (value.length > num) {
      if (value.length < 3 || num < 3) {
        value = value.substr(0,num) + "...";
      } else {
        value = value.substr(0,num-3) + "...";
      }
    }
    return value;
  }
}
