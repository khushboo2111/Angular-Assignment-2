import { ApplicationRef, Component, DoBootstrap, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [


  ],
  imports: [

    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'user-details/:name', component: UserDetailsComponent },
    ]),

  ],

})

export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent); // Bootstrap AppComponent
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



