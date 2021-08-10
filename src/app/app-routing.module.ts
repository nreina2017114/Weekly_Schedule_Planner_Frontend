import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContactsComponent } from './components/home-contacts/home-contacts.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SaveContactComponent } from './components/save-contact/save-contact.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { UserComponent } from './components/user/user.component';
import { AdminGuard } from './guards/admin.guard';
import { ListarTareaComponent } from "./components/listar-tarea/listar-tarea.component";
import { CrearTareaComponent } from "./components/crear-tarea/crear-tarea.component";
const routes: Routes = [
  //una manera de realizarlo
  {path: '', component: HomeComponent}, //un solo uso | va a ser la primer ruta que se mostrará (primer componente)
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'saveContact', component: SaveContactComponent},
  {path: 'user', component: UserComponent},
  {path: 'saveUser', canActivate:[AdminGuard], component: SaveUserComponent},
  {path: 'listUsers', canActivate:[AdminGuard], component: ListUsersComponent},
  {path: 'homeContacts', component: HomeContactsComponent},
  {path: 'listar-tarea', component: ListarTareaComponent},
  {path: 'crear-tarea', component: CrearTareaComponent},


  
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
