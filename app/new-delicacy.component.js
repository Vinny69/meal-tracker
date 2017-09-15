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
var delicacy_model_1 = require("./delicacy.model");
var NewDelicacyComponent = /** @class */ (function () {
    function NewDelicacyComponent() {
        this.onSubmitNewDelicacy = new core_1.EventEmitter();
    }
    NewDelicacyComponent.prototype.addNewDelicacy = function (newName, newDetails, newCalories) {
        var newDelicacy = new delicacy_model_1.Delicacy(newName.value, newDetails.value, parseInt(newCalories.value));
        this.onSubmitNewDelicacy.emit(newDelicacy);
        newName.value = "";
        newDetails.value = "";
        newCalories.value = "";
    };
    NewDelicacyComponent = __decorate([
        core_1.Component({
            selector: 'new-delicacy',
            outputs: ['onSubmitNewDelicacy'],
            template: "\n    <div>\n      <h2>Enter a Delicacy to Your Daily Log</h2>\n      <input class=\"input-lg\" type=\"text\" placeholder=\"Food Name\" #newName><br>\n      <input class=\"input-lg\" type=\"text\" placeholder=\"Details\" #newDetails><br>\n      <input class=\"input-lg\" type=\"number\" placeholder=\"Number of Calories\" #newCalories><br>\n      <button (click)=\"addNewMeal(newName, newDetails, newCalories)\" type=\"button\" class=\"btn btn-lg btn-success\">Enter a Delicacy</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NewDelicacyComponent);
    return NewDelicacyComponent;
}());
exports.NewDelicacyComponent = NewDelicacyComponent;
//# sourceMappingURL=new-delicacy.component.js.map