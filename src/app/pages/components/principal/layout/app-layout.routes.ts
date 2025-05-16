// layout.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { QuienesSomosComponent } from '../../modules/nosotros/quienes-somos/quienes-somos.component';
import { DirectorioComponent } from '../../modules/nosotros/directorio/directorio.component';
import { AuthGuard } from '../../../../guards/auth.guard';
export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'quienes-somos', component: QuienesSomosComponent, canActivate: [AuthGuard] },
      { path: 'directorio', component: DirectorioComponent, canActivate: [AuthGuard] },
    ],
  },
];
