import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';
import { Workout } from './workout';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(WorkoutService);
  });

  it('should return an empty array of workouts', () => {
    expect(service.getWorkouts().length).toBe(0);
  });

  it('should add a new workout to the array', () => {
    const workout: Workout = { id: 1, username: 'username', workoutType: 'workoutType', minutes: 30 };
    service.addWorkout(workout);
    expect(service.getWorkouts().length).toBe(1);
  });
});
