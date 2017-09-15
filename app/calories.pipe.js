"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("angular2/core");
var HealthyRatingPipe = /** @class */ (function () {
    function HealthyRatingPipe() {
    }
    HealthyRatingPipe.prototype.transform = function (input, args) {
        var desiredHealthyRating = args[0];
        if (desiredHealthyRating === "unhealthy") {
            return input.filter(function (delicacy) {
                return delicacy.calories > 300;
            });
        }
        else if (desiredHealthyRating === "healthy") {
            return input.filter(function (delicacy) {
                return delicacy.calories <= 300;
            });
        }
        else {
            return input;
        }
    };
    HealthyRatingPipe = __decorate([
        core_1.Pipe({
            name: 'healthyRating',
            pure: false
        })
    ], HealthyRatingPipe);
    return HealthyRatingPipe;
}());
exports.HealthyRatingPipe = HealthyRatingPipe;
//# sourceMappingURL=calories.pipe.js.map