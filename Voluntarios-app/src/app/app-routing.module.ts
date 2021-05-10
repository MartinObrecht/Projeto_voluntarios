import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { UsuarioAtualizarComponent } from './components/usuario-atualizar/usuario-atualizar.component';
import { LoginComponent } from './components/usuario-login/login.component';
import { RegistroComponent } from './components/usuario-registro/registro.component';
<<<<<<< HEAD
import { EnderecoAtualizarComponent } from './components/endereco-atualizar/endereco-atualizar.component';
import { EnderecoComponent } from './components/endereco-criar/endereco.component';
=======
import { UsuarioVoluntarioComponent} from './components/usuario-voluntario/usuario-voluntario.component';

>>>>>>> Mariana

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'usuario/login', component: LoginComponent },
  { path: 'usuario/registro/:tipo', component: RegistroComponent },
  { path: 'usuario/endereco/:id', component:EnderecoComponent},
  
<<<<<<< HEAD
  { path :'endereco/atualizar', component: EnderecoAtualizarComponent, canActivate: [AuthGuard]},  
  { path: 'usuario/atualizar', component: UsuarioAtualizarComponent, canActivate: [AuthGuard] },
=======
  { path: 'usuario/atualizar', component: UsuarioAtualizarComponent },
  { path: 'endereco/:id', component:EnderecoComponent },
  { path: 'usuario/voluntario', component: UsuarioVoluntarioComponent},
>>>>>>> Mariana
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}