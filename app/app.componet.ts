import { components } from '@angular/core';

@Component ({
  selector: 'my-app'
  template: '
  <div class="container">
  </div>'
})import { Component, EventEmitter } from 'angular2/core';
import { delicacyListComponent } from './delicacy-list.component';
import { delicacy } from './delicacy.model';
import { HealthyRatingPipe } from './calories.pipe';

@Component({
  selector: 'my-app',
  directives: [DelicacyListComponent],
  template: `
  <div class= "jumbotron center">
    <h1>Fatboy LoseIt App</h1>
  </div>
    <div class="container content">
      <h2>Today's Meals</h2>
      <delicacy-list
        [delicacyList]="delicacy"
        (onDelicacySelect)="delicacyWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Meal1", "Details1 Healthy", 299),
      new Meal("Meal2", "Details2 Healthy", 300),
      new Meal("Meal3", "Details3 Healthy", 200),
      new Meal("Meal4", "Details4 Unhealthy", 500),
      new Meal("Meal5", "Details5 Unhealthy", 456),
      new Meal("Meal6", "Details6 Unhealthy", 800)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
