import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { PostPageComponent } from './componets/post-page/post-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MedlinModule { }
