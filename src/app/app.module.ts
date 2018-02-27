// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FirebaseModule } from './firebase/firebase.module';

// Components
import { AppComponent } from './app.component';

// Other
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    FirebaseModule,
    PortfolioModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
