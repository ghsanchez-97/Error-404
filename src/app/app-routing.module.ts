import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopageComponent } from './Component/nopage/nopage.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo:'',
    pathMatch: 'full',
    component:NopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
