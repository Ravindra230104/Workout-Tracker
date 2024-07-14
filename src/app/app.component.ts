// app.component.ts

import { Component } from '@angular/core';
import { UserWorkout } from './workout-list/user-workout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  refresh: boolean = false;
  selectedUser?: UserWorkout;
  users: UserWorkout[] = []; // Assuming this is populated with data

  onWorkoutAdded() {
    this.refresh = !this.refresh;
  }
  
}
