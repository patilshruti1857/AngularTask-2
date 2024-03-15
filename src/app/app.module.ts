import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule
    
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
