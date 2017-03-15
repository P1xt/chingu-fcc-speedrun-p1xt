import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GdpDataService } from './services/gdp-data.service';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [GdpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
