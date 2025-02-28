/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(routes),  // Provides routing globally
    importProvidersFrom(RouterModule)  // Imports RouterModule globally
  ]
})
bootstrapApplication(HeaderComponent)
  .catch((err) => console.error(err));

  