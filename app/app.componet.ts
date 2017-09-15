import { Component, EventEmitter } from 'angular2/core';
import { DelicacyListComponent } from './delicacy-list.components-list.component';
import { Delicacy } from './delicacy.model';
import { HealthyRatingPipe } from './calories.pipe';

@Component({
  selector: 'my-app',
  directives: [DelicacyListComponent],
  template: `
  <div class= "jumbotron center">
    <h1>Fatboy LoseIt App</h1>
  </div>
    <div class="container content">
      <h2>Today's Delicacy</h2>
      <delicacy-list
        [delicacyList]="delicacy"
        (onDelicacySelect)="delicacyWasSelected($event)">
      </delicacy-list>
    </div>
  `
})

export class AppComponent {
  public delicacy: Delicacy[];
  constructor() {
    this.delicacy = [
      new Delicacyl("Delicacy", "Details1 Healthy", 299),
      new Delicacy("Delicacy", "Details2 Healthy", 300),
      new Delicacy("Delicacy", "Details3 Healthy", 200),
      new Delicacy("Delicacy4", "Details4 Unhealthy", 500),
      new Delicacy("Delicacy5", "Details5 Unhealthy", 456),
      new Delicacy("Delicacy6", "Details6 Unhealthy", 800)
    ];
  }
  delicacyWasSelected(clickedDelicacy: Delicacy): void {
    console.log('parent', clickedDelicacy);
  }
}
