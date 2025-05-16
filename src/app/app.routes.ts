import { Routes } from '@angular/router';
import { AuthComponent } from './pages/components/auth/auth/auth.component';
import { layoutRoutes } from './pages/components/principal/layout/app-layout.routes';
import { AutenticadoGuard } from './guards/autenticado.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'layout', children: layoutRoutes },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
