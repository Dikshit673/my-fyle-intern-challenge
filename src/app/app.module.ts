import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProfileReposComponent } from './MyComponents/profile-repos/profile-repos.component';
import { ProfileBodyComponent } from './MyComponents/profile-body/profile-body.component';
import { ProfileSearchComponent } from './MyComponents/profile-search/profile-search.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ProfileHerosComponent } from './MyComponents/profile-heros/profile-heros.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonLoaderComponent } from './MyComponents/skeleton-loader/skeleton-loader.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProfileReposComponent,
    ProfileBodyComponent,
    ProfileSearchComponent,
    HomeComponent,
    ProfileHerosComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    RouterOutlet
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
