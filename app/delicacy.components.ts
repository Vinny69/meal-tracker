import { Component } from 'angular2/core';
import { Delicacy } from './delicacy.model';
import { DelicacyListComponent } from './delicacy-list.component';

@Component({
  selector: 'delicacy-display',
  inputs: ['delicacy'],
  template: `
    <h4>{{delicacy.name}}</h4>
  `
})
export class DelicacyComponent {
  public delicacy: Delicacy;
}
