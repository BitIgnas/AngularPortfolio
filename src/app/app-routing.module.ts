import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing-page/components/main/main.component';
import { HomeComponent } from './landing-page/layout/home/home.component';
import { SingupComponent } from './landing-page/layout/singup/singup.component';

const routes: Routes = [
  { path: 'signup', component: SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
