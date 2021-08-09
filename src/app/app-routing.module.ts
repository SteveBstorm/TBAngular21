import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'about', component : AboutComponent, children : [
    {path : 'home', component : HomeComponent},

  ]},
  {path : 'test', loadChildren : () => import('./test/test.module').then(m => m.TestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
