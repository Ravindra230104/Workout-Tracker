import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component'; // Adjust path as per your structure
import { UserInputComponent } from './user-input/user-input.component'; // Adjust path as per your structure
import { WorkoutListComponent } from './workout-list/workout-list.component'; // Adjust path as per your structure
  
@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    WorkoutListComponent,
     // Add more components here as needed
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
   ],
  providers: [],
  bootstrap: [AppComponent] // AppComponent should be included in the bootstrap array
})
export class AppModule { }
