import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full'},
    { path: '**', redirectTo: '/error', pathMatch: 'full' },
];
