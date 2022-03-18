import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { FourComponent } from './component/four/four.component';
import { MainComponent } from './component/main/main.component';
import { ModalComponent } from './component/modal/modal.component';
import { SecondComponent } from './component/second/second.component';
import { ThreeComponent } from './component/three/three.component';
import { HomePageComponent } from './medlin/componets/home-page/home-page.component';
import { PostPageComponent } from './medlin/componets/post-page/post-page.component';
import { MainLayoutComponent } from './medlin/shared/components/main-layout/main-layout.component';

export const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {
      path: 'first', component: FirstComponent, children: [
        { path: '', component: MainLayoutComponent, children: 
          [
            {path:'', redirectTo: 'first', pathMatch: 'full'},
            { path: '', component: HomePageComponent },
            { path: '', component: PostPageComponent }
          ]
        }
      ],
      data: {label: 'First'}
    },
    {path: 'second', component: SecondComponent, data: {label: 'Second'}},
    {path: 'third', component: ThreeComponent, data: {label: 'Three'}},
    {path: 'four', component: FourComponent, data: {label: 'Books-Count Ngrx'}},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
