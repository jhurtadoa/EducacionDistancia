import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './components/comun/layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './components/comun/layout/app-layout/app-layout.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/comun/dashboard/dashboard.component';
import { AsignaturaListadoComponent } from './components/asignatura/asignatura-listado/asignatura-listado.component';
import { AsignaturaDetalleComponent } from './components/asignatura/asignatura-detalle/asignatura-detalle.component';


const routes: Routes = [
  //No logueado
  { path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent}
    ]
  },
  //Logueado
  { path: '', 
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'asignaturas', component: AsignaturaListadoComponent },
      { path: 'asignatura/:id', component: AsignaturaDetalleComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }