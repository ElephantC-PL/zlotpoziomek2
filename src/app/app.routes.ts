import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { EditionGuard } from './guards/edition.guard';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

export const routes: Routes = [    
    { path: '', component: ContentComponent },
    { path: '404', component: NotFoundComponent },    
    { path: ':year', component: ContentComponent, canActivate: [EditionGuard] },    
    { path: '**', redirectTo: '/404' }
  ];
  
  export const appRouting = provideRouter(routes, withComponentInputBinding());
