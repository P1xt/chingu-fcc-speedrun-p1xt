import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThirtyDaysComponent } from './components/thirty-days/thirty-days.component';
import { AllTimeComponent } from './components/all-time/all-time.component';

import { ThirtyDaysService } from './services/thirty-days.service';
import { AllTimeService } from './services/all-time.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThirtyDaysComponent,
    AllTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ThirtyDaysService, AllTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
