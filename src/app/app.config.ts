import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { provideFunctions, getFunctions } from '@angular/fire/functions';


const firebaseConfig = {
  apiKey: "AIzaSyAKSYo_KNdgh63Fo1yXzgRqxFE9ktkPjeU",
  authDomain: "curso-costura-c3837.firebaseapp.com",
  projectId: "curso-costura-c3837",
  storageBucket: "curso-costura-c3837.firebasestorage.app",
  messagingSenderId: "857291112426",
  appId: "1:857291112426:web:93111609b0d96a6f4bbc93",
  measurementId: "G-VC7LJE9ZRW"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAnalytics(() => getAnalytics()), 
    ScreenTrackingService,
    provideFunctions(() => getFunctions()),
  ]
};
