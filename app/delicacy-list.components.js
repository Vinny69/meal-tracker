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
var delicacy_component_1 = require("./delicacy.component");
var new_delicacy_component_1 = require("./new-delicacy.component");
var calories_pipe_1 = require("./calories.pipe");
var edit_delicacy_details_component_1 = require("./edit-delicacy-details.component");
var DelicacyListComponent = /** @class */ (function () {
    function DelicacyListComponent() {
        this.delicacyList = [];
        this.filter = "all";
        this.onDelicacySelect = new core_1.EventEmitter();
    }
    DelicacyListComponent.prototype.delicacyClicked = function (clickedDelicacy) {
        console.log('child', clickedDelicacy);
        this.selectedDelicacy = clickedDelicacy;
        this.onDelicacySelect.emit(clickedDelicacy);
    };
    DelicacyListComponent.prototype.createDelicacy = function (newDelicacy) {
        this.delicacyList.push(newDelicacy);
    };
    DelicacyListComponent.prototype.onChange = function (option) {
        this.filter = option;
        console.log(this.filter);
    };
    DelicacyListComponent.prototype.refreshDelicacy = function (newDelicacy) {
        for (var _i = 0, _a = this.delicacyList; _i < _a.length; _i++) {
            var delicacy = _a[_i];
            if (delicacy.name === newDelicacy.name) {
                delicacy.calories = newDelicacy.calories;
            }
        }
    };
    DelicacyListComponent = __decorate([
        core_1.Component({
            selector: 'delicacy-list',
            inputs: ['delicacyList'],
            outputs: ['onDelicacySelect'],
            pipes: [calories_pipe_1.HealthyRatingPipe],
            directives: [delicacy_component_1.DelicacyComponent, new_delicacy_component_1.NewDelicacyComponent, edit_delicacy_details_component_1.EditDelicacyDetailsComponent],
            templateUrl: 'app/delicacy-list.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], DelicacyListComponent);
    return DelicacyListComponent;
}());
exports.DelicacyListComponent = DelicacyListComponent;
//# sourceMappingURL=delicacy-list.components.js.map