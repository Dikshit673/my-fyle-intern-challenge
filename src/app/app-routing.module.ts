import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { SkeletonLoaderComponent } from './MyComponents/skeleton-loader/skeleton-loader.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  // {
  //   path: "about",
  //   component: SkeletonLoaderComponent,
  // },
  {
    path: "**",
    component: HomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
