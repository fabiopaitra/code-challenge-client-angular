import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BeerStatusComponent } from './modules/beer-status/beer-status.component';
import { BeerStatusService } from './shared/services/xhr/beer-status.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BeerStatusService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
