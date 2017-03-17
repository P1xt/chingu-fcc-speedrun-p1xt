import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WikiViewerComponent } from './components/wiki-viewer/wiki-viewer.component';
import { GetWikipediaService } from './services/wikipedia.service';
@NgModule({
  declarations: [
    AppComponent,
    WikiViewerComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [GetWikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
