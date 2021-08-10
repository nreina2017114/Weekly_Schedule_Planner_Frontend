import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Servicios
import { RestUserService } from '../app/services/restUser/rest-user.service';

//componentes
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeContactsComponent } from './components/home-contacts/home-contacts.component';
import { SaveContactComponent } from './components/save-contact/save-contact.component';
import { UserComponent } from './components/user/user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { SearchPipe } from './pipes/search.pipe';
import { ListarTareaComponent } from './components/listar-tarea/listar-tarea.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    HomeContactsComponent,
    SaveContactComponent,
    UserComponent,
    ListUsersComponent,
    SaveUserComponent,
    SearchPipe,
    ListarTareaComponent,
    CrearTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
