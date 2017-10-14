import { Component, Output, EventEmitter } from '@angular/core';
import { ModalController } from 'ionic-angular';
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
        boxShadow: '*',
        height: '*',
        width: '*'
      })),
      state('active', style({
        boxShadow: '0 3px 16px rgba(0, 0, 0, 0.3)',
        height: '65px',
        width: '65px',
        top: '-2.5px',
        left: '-2.5px'
      })),
      transition('inactive <=> active', animate('100ms ease-in'))
    ]),
    trigger('activeSwitchButton', [
      state('inactive', style({})),
      state('active', style({
        top: '-68px'
      })),
      transition('inactive <=> active', animate('150ms ease-in'))
    ]),
    trigger('activePostButton', [
      state('inactive', style({})),
      state('active', style({
        top: '-136px'
      })),
      transition('inactive <=> active', animate('200ms ease-in'))
    ])
  ]
})
export class ActionButtonComponent {
  @Output() openModal = new EventEmitter();

  text: string;
  isActive: string;

  constructor(
    public modalCtrl: ModalController
  ) {
    console.log('Hello ActionButtonComponent Component');
    this.text = 'Hello World';
    this.isActive = 'inactive';
  }

  touchedActionButton() {
    this.isActive = this.isActive === 'active' ? 'inactive' : 'active';
  }

  navigateToPost() {
    let postModal = this.modalCtrl.create('post', {}, {});
    postModal.onDidDismiss(data => {});
    this.isActive = 'inactive';
    this.openModal.emit();
    postModal.present();
  }

}
