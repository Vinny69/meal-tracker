import { Component, EventEmitter } from 'angular2/core';
import { DelicacyComponent } from './delicacy.component';
import { NewDelicacyComponent } from './new-delicacy.component';
import { Delicacy } from './delicacy.model';
import { HealthyRatingPipe } from './calories.pipe';
import { EditDelicacyDetailsComponent } from './edit-delicacy-details.component';

@Component({
  selector: 'delicacy-list',
  inputs: ['delicacyList'],
  outputs: ['onDelicacySelect'],
  pipes: [ HealthyRatingPipe ],
  directives: [DelicacyComponent, NewDelicacyComponent, EditDelicacyDetailsComponent],
  templateUrl: 'app/delicacy-list.component.html'
})
export class DelicacyListComponent {
  public delicacyList: Delicacy[] = [];
  public onDelicacySelect: EventEmitter<Delicacy>;
  public selectedDelicacy: Delicacy;
  public filter: string = "all";
  constructor() {
    this.onDelicacySelect = new EventEmitter();
  }
  delicacyClicked(clickedDelicacy: Delicacy): void {
    console.log('child', clickedDelicacy);
    this.selectedDelicacy = clickedDelicacy;
    this.onDelicacySelect.emit(clickedDelicacy);
  }
  createDelicacy(newDelicacy): void {
    this.delicacyList.push(newDelicacy);
  }
  onChange(option) {
    this.filter = option;
    console.log(this.filter);
  }
  refreshDelicacy(newDelicacy: Delicacy) {
    for(var delicacy of this.delicacyList) {
      if(delicacy.name === newDelicacy.name) {
        delicacy.calories = newDelicacy.calories;
      }
    }
  }
}
