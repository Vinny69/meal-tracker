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
var meal_component_1 = require("./meal.component");
var new_meal_component_1 = require("./new-meal.component");
var calories_pipe_1 = require("./calories.pipe");
var edit_meal_details_component_1 = require("./edit-meal-details.component");
var MealListComponent = /** @class */ (function () {
    function MealListComponent() {
        this.mealList = [];
        this.filter = "all";
        this.onMealSelect = new core_1.EventEmitter();
    }
    MealListComponent.prototype.mealClicked = function (clickedMeal) {
        console.log('child', clickedMeal);
        this.selectedMeal = clickedMeal;
        this.onMealSelect.emit(clickedMeal);
    };
    MealListComponent.prototype.createMeal = function (newMeal) {
        this.mealList.push(newMeal);
    };
    MealListComponent.prototype.onChange = function (option) {
        this.filter = option;
        console.log(this.filter);
    };
    MealListComponent.prototype.refreshMeal = function (newMeal) {
        for (var _i = 0, _a = this.mealList; _i < _a.length; _i++) {
            var meal = _a[_i];
            if (meal.name === newMeal.name) {
                meal.calories = newMeal.calories;
            }
        }
    };
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            inputs: ['mealList'],
            outputs: ['onMealSelect'],
            pipes: [calories_pipe_1.HealthyRatingPipe],
            directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent, edit_meal_details_component_1.EditMealDetailsComponent],
            templateUrl: 'app/meal-list.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=delicacy-list.components.js.map