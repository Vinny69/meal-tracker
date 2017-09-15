import {Component, EventEmitter} from 'angular2/core';
import {Delicacy} from './delicacy.model';

@Component({
  selector: 'new-delicacy',
  outputs: ['onSubmitNewDelicacy'],
  template: `
    <div>
      <h2>Enter a Delicacy to Your Daily Log</h2>
      <input class="input-lg" type="text" placeholder="Food Name" #newName><br>
      <input class="input-lg" type="text" placeholder="Details" #newDetails><br>
      <input class="input-lg" type="number" placeholder="Number of Calories" #newCalories><br>
      <button (click)="addNewMeal(newName, newDetails, newCalories)" type="button" class="btn btn-lg btn-success">Enter a Delicacy</button>
    </div>
  `
})
export class NewDelicacyComponent {
  public onSubmitNewDelicacy: EventEmitter<Delicacy>;
  constructor(){
    this.onSubmitNewDelicacy = new EventEmitter();
  }
  addNewDelicacy(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var newDelicacy = new Delicacy(newName.value, newDetails.value, parseInt(newCalories.value));
    this.onSubmitNewDelicacy.emit(newDelicacy);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
