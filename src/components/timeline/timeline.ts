import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the TimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  @ViewChild(Slides) slides: Slides;

  text: string;
  tweets;

  constructor() {
    console.log('Hello TimelineComponent Component');
    this.text = 'Hello World from timeline';
    this.tweets = [
      { id: 1, tweet: 'first tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' },
      { id: 2, tweet: 'second tweet' }
    ];
  }

  slideChange() {
    console.log('=== slide change ===');
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  openModal() {
    console.log('=== open modal ===');
    let el = document.getElementsByClassName('timeline-component')[0];
    console.log(el);
    el.classList.add('go-to-back');
  }

}
