import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './component/first/first.component';
import { FourComponent } from './component/four/four.component';
import { SecondComponent } from './component/second/second.component';
import { ThreeComponent } from './component/three/three.component';

export const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'first', component: FirstComponent, data: {label: 'First'}},
  {path: 'second', component: SecondComponent, data: {label: 'Second'}},
  {path: 'third', component: ThreeComponent, data: {label: 'Three'}},
  {path: 'four', component: FourComponent, data: {label: 'Four'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
