import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './store/study-ngRx-reducer';
import { AppComponent } from './app/app-component/app-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  template: `
    <app-component></app-component>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideStore({
      counter: counterReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
}).catch((err) => console.error(err));
