"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("angular2/core");
var EditDelicacyDetailsComponent = /** @class */ (function () {
    function EditDelicacyDetailsComponent() {
        this.onEditDelicacy = new core_1.EventEmitter;
    }
    EditDelicacyDetailsComponent.prototype.editDelicacy = function (editName, editDetails, editCalories) {
        this.delicacy.name = editName.value;
        this.delicacy.details = editDetails.value;
        this.delicacy.calories = editCalories.valueAsNumber;
        this.onEditDelicacy.emit(this.delicacy);
    };
    EditDelicacyDetailsComponent = __decorate([
        core_1.Component({
            selector: 'edit-delicacy-details',
            inputs: ['delicacy'],
            template: "\n  <div class=\"delicacy-form\">\n    <h3>{{ delicacy.name }}</h3>\n    <h4>{{ delicacy.details }}</h4>\n    <h4>{{ delicacy.calories }} calories</h4>\n    <hr>\n    <h5>Edit This Delicacy:</h5>\n    <input value=\"{{delicacy.name}}\" type=\"text\" class=\"col-sm-10 input-lg\" placeholder=\"Delicacy Name\" #editName/><br>\n    <input value=\"{{delicacy.details}}\" type=\"text\" class=\"col-sm-10 input-lg\" #editDetails/>\n    <input value=\"{{delicacy.calories}}\" type=\"number\" class=\"col-sm-3 input-lg\" #editCalories/>\n    <button (click)=\"editDelicacy(editName, editDetails, editCalories)\" class=\"btn-lg btn-success add-button\">Edit Delicacy</button>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], EditDelicacyDetailsComponent);
    return EditDelicacyDetailsComponent;
}());
exports.EditDelicacyDetailsComponent = EditDelicacyDetailsComponent;
//# sourceMappingURL=edit-delecacy-details.js.map