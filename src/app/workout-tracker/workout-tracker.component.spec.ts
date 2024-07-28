import { TestBed, waitForAsync } from '@angular/core/testing';
import { WorkoutTrackerComponent } from './workout-tracker.component';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';

describe('WorkoutTrackerComponent', () => {
  let component: WorkoutTrackerComponent;
  let service: WorkoutService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutTrackerComponent],
      providers: [WorkoutService]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(WorkoutService);
    component = TestBed.createComponent(WorkoutTrackerComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 workouts by default', () => {
    expect(component.workouts.length).toBe(3);
  });

  it('should call addWorkout when form is submitted', () => {
    const workoutServiceSpy = spyOn(service, 'addWorkout');
    component.addWorkout('username', 'workoutType', 30);
    expect(workoutServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should filter workouts when searchUsername is changed', () => {
    component.searchUsername = 'John';
    component.filterWorkouts();
    expect(component.workouts.length).toBe(1);
  });

  it('should paginate workouts when onPageChange is called', () => {
    component.onPageChange(2);
    expect(component.currentPage).toBe(2);
  });
});
