import { Injectable } from '@angular/core';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [
    { id: 1, username: 'John Doe', workoutType: 'Running', minutes: 30 },
    { id: 2, username: 'Jane Doe', workoutType: 'Swimming', minutes: 45 },
    { id: 3, username: 'Bob Smith', workoutType: 'Cycling', minutes: 60 }
  ];

  constructor() { }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
  }
}
