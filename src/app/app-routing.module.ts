import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { FourComponent } from './component/four/four.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MealComponent } from './component/meal/meal.component';
import { ModalComponent } from './component/modal/modal.component';
import { RegisterComponent } from './component/register/register.component';
import { SecondComponent } from './component/second/second.component';
import { ThreeComponent } from './component/zoo/three.component';
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
    {path: 'third', component: ThreeComponent, data: {label: 'Zoo'}},
    {path: 'four', component: FourComponent, data: {label: 'Books-Count Ngrx'}},
    {path: 'meal', component: MealComponent, data: {label: 'Meal'}}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
