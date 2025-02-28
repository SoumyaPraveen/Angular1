import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    {
        path: 'features',
        component: FirstComponent,
    },
    {
        path: '',
        component: LandingComponent,
    }
];
