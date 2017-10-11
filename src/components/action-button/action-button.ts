import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * Generated class for the ActionButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'action-button',
  templateUrl: 'action-button.html',
  animations: [
    trigger('touchActionButton', [
      state('inactive', style({
        boxShadow: '*'
      })),
      state('active', style({
        boxShadow: '0 3px 16px rgba(0, 0, 0, 0.4)'
      })),
      transition('inactive <=> active', animate('100ms ease-in'))
    ])
  ]
})
export class ActionButtonComponent {

  text: string;
  isActive: string;

  constructor() {
    console.log('Hello ActionButtonComponent Component');
    this.text = 'Hello World';
    this.isActive = 'inactive';
  }

  touchedActionButton() {
    this.isActive = this.isActive === 'active' ? 'inactive' : 'active';
  }

}
