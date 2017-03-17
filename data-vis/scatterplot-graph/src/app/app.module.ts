import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { ScatterplotGraphComponent } from './components/scatterplot-graph/scatterplot-graph.component';
import { CyclistDataService } from './services/cyclist-data.service';
@NgModule({
  declarations: [
    AppComponent,
    ScatterplotGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [CyclistDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
