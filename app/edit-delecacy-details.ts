import {Component, EventEmitter} from 'angular2/core';
import {Delicacy} from './delicacy.model';

@Component({
  selector: 'edit-delicacy-details',
  inputs: ['delicacy'],
  template: `
  <div class="delicacy-form">
    <h3>{{ delicacy.name }}</h3>
    <h4>{{ delicacy.details }}</h4>
    <h4>{{ delicacy.calories }} calories</h4>
    <hr>
    <h5>Edit This Delicacy:</h5>
    <input value="{{delicacy.name}}" type="text" class="col-sm-10 input-lg" placeholder="Delicacy Name" #editName/><br>
    <input value="{{delicacy.details}}" type="text" class="col-sm-10 input-lg" #editDetails/>
    <input value="{{delicacy.calories}}" type="number" class="col-sm-3 input-lg" #editCalories/>
    <button (click)="editDelicacy(editName, editDetails, editCalories)" class="btn-lg btn-success add-button">Edit Delicacy</button>
  </div>
  `
})
export class EditDelicacyDetailsComponent {
  public delicacy: Delicacy;
  public onEditDelicacy: EventEmitter<Delicacy>
  constructor(){
    this.onEditDelicacy = new EventEmitter;
  }
  editDelicacy(editName: HTMLInputElement, editDetails: HTMLInputElement, editCalories: HTMLInputElement) {
    this.delicacy.name = editName.value;
    this.delicacy.details = editDetails.value;
    this.delicacy.calories = editCalories.valueAsNumber;
    this.onEditDelicacy.emit(this.delicacy);
  }
}
