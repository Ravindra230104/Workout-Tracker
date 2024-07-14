// Example: src/main.ts

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust this path as per your project structure

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
