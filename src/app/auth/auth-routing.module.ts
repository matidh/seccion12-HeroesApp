import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// 1. Creamos el array de rutas , en lugar de component ahora ponemos children

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'registro',
        component: RegistroComponent
      },
      {
        path:'**',
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  // Añadimos el routerModule a los import y le pasamos el array routes
  imports: [
    RouterModule.forChild( routes )
  ],
  //exportamos este router module para tenerlo disponible
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
