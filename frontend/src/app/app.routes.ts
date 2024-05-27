import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },

  {
    path: 'explore-schools',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app.component').then((mod) => mod.AppComponent),
  },

  {
    path: 'details',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app.component').then((mod) => mod.AppComponent),
  },

  {
    path: 'applications',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app.component').then((mod) => mod.AppComponent),
  },

  {
    path: 'sign-in',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app.component').then((mod) => mod.AppComponent),
  },

  // Route to Page NOt found for any other route
  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./page-not-found/page-not-found.component').then(
  //         (mod) => mod.PageNotFoundComponent
  //       ),
  //   },
];
