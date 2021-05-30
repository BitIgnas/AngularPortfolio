import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './layout/home/home.component';
import { SingupComponent } from './layout/singup/singup.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    ArticlesComponent,
    HomeComponent,
    SingupComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
     
    ])
    
  ],
  exports: [
    HomeComponent,
    SingupComponent,
    SignUpComponent
  ]
})
export class LandingPageModule { }
