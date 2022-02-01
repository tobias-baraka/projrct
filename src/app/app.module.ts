import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule }from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { OurWebComponent } from './our-web/our-web.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeEditComponent } from './home/home-edit/home-edit.component';
import { ProductService } from 'src/app/home/product.service';

const appRoutes: Routes =
[

{ path: '' , component: HomeComponent },
{ path: 'login' , component: LoginComponent },
{ path: 'aboutUs' , component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    OurWebComponent,
    AboutUsComponent,
    LoginComponent,
    SignupComponent,
    HomeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
