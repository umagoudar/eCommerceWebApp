import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WomenComponent } from './components/women/women.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenComponent } from './components/men/men.component';

export const routes: Routes = [
 { path: '',       component:LoginComponent },
 { path: 'login',  component:LoginComponent  },
 { path: 'navbar',   component:NavbarComponent, children:[
    { path: 'women',   component:WomenComponent },
    { path: 'men',   component:MenComponent  },
  ]},
 
 ];

 @NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: [routes]
})
export class AppRoutingModule { }