import { Pipe, PipeTransform } from 'angular2/core';
import { Delicacy } from './delicacy.model.model';

@Pipe({
  name: 'healthyRating',
  pure: false
})
export class HealthyRatingPipe implements PipeTransform {
  transform(input: Delicacy[], args) {
    var desiredHealthyRating = args[0];
    if (desiredHealthyRating === "unhealthy") {
      return input.filter((delicacy) => {
        return delicacy.calories > 300;
      });
    } else if (desiredHealthyRating === "healthy") {
      return input.filter((delicacy) => {
        return delicacy.calories <= 300;
      });
    } else {
      return input;
    }
  }
}
