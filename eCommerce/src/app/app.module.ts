import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app/app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WomenComponent } from './components/women/women.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenComponent } from './components/men/men.component';
import { WomenModule } from './components/women/women.module';
import { FilterPipe } from './components/women/FilterPipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WomenComponent,
    LoginComponent,
    NavbarComponent,
    MenComponent,
    FilterPipe
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpModule,
    WomenModule,
    RouterModule.forRoot(routes, {
    useHash: true
   })
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
