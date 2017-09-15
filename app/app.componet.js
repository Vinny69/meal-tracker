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
var delicacy_list_components_list_component_1 = require("./delicacy-list.components-list.component");
var delicacy_model_1 = require("./delicacy.model");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.delicacy = [
            new Delicacyl("Delicacy", "Details1 Healthy", 299),
            new delicacy_model_1.Delicacy("Delicacy", "Details2 Healthy", 300),
            new delicacy_model_1.Delicacy("Delicacy", "Details3 Healthy", 200),
            new delicacy_model_1.Delicacy("Delicacy4", "Details4 Unhealthy", 500),
            new delicacy_model_1.Delicacy("Delicacy5", "Details5 Unhealthy", 456),
            new delicacy_model_1.Delicacy("Delicacy6", "Details6 Unhealthy", 800)
        ];
    }
    AppComponent.prototype.delicacyWasSelected = function (clickedDelicacy) {
        console.log('parent', clickedDelicacy);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [delicacy_list_components_list_component_1.DelicacyListComponent],
            template: "\n  <div class= \"jumbotron center\">\n    <h1>Fatboy LoseIt App</h1>\n  </div>\n    <div class=\"container content\">\n      <h2>Today's Delicacy</h2>\n      <delicacy-list\n        [delicacyList]=\"delicacy\"\n        (onDelicacySelect)=\"delicacyWasSelected($event)\">\n      </delicacy-list>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.componet.js.map