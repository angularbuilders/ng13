import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'auth/register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'agencies', loadChildren: () => import('./agencies/agencies.module').then(m => m.AgenciesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
