import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // <-- import HttpClientModule
import 'zone.js';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()),
    importProvidersFrom(HttpClientModule), // <-- provide it here
  ],
}).catch((err) => console.error(err));
