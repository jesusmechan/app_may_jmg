import { Routes } from '@angular/router';
import { AuthComponent } from './pages/components/auth/auth/auth.component';
import { layoutRoutes } from './pages/components/principal/layout/app-layout.routes';
import { AutenticadoGuard } from './guards/autenticado.guard';
import { ActiveUserComponent } from './pages/components/active-user/active-user/active-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'activate-user', component: ActiveUserComponent },
  { path: 'layout', children: layoutRoutes },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
