import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import {CompAAComponent} from './comp-a/comp-aa/comp-aa.component';

const routes: Routes = [
  {path:'',component:CompAComponent},
  {path:'compa',component:CompAComponent},
  {path:'compb',component:CompBComponent},
  {path:'compa/compaa',component:CompAAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
