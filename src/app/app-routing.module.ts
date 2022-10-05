import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './components/inicio/bienvenido/bienvenido.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/bienvenidos', pathMatch:'full'},
  {path: 'bienvenidos', component:BienvenidoComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', redirectTo: '/bienvenidos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
