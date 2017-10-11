import { Component } from '@angular/core';

/**
 * Generated class for the TweetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tweet',
  templateUrl: 'tweet.html'
})
export class TweetComponent {

  text: string;

  constructor() {
    console.log('Hello TweetComponent Component');
    this.text = 'Hello World';
  }

}
