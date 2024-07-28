import { Component, OnInit} from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.component.html',
  styleUrls: ['./workout-tracker.component.css'],
})
export class WorkoutTrackerComponent implements OnInit {
  workouts: Workout[] = [];
  searchUsername: string = '';
  filterWorkoutType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
  }

  addWorkout(username: string, workoutType: string, minutes: number): void {
    const newWorkout: Workout = {
      id: this.workouts.length + 1,
      username,
      workoutType,
      minutes,
    };
    this.workoutService.addWorkout(newWorkout);
    this.workouts = this.workoutService.getWorkouts();
  }

  filterWorkouts(): void {
    this.workouts = this.workoutService.getWorkouts().filter((workout) => {
      return (
        workout.username
          .toLowerCase()
          .includes(this.searchUsername.toLowerCase()) &&
        (this.filterWorkoutType === '' ||
          workout.workoutType === this.filterWorkoutType)
      );
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  parseInput(inputValue: string): number {
    return parseInt(inputValue, 10);
  }
}
