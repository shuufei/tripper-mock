import { Component } from '@angular/core';

/**
 * Generated class for the TimelineHeadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline-head',
  templateUrl: 'timeline-head.html'
})
export class TimelineHeadComponent {

  text: string;

  constructor() {
    console.log('Hello TimelineHeadComponent Component');
    this.text = 'Hello World';
  }

}
