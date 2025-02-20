import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: ':year', component: AppComponent }
];

export const router = provideRouter(routes, withComponentInputBinding());
