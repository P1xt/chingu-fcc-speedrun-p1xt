import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common'; 
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TwitchClientComponent } from './components/twitch-client/twitch-client.component';
import { GetTwitchService } from './services/twitch.service';
@NgModule({
  declarations: [
    AppComponent,
    TwitchClientComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    CommonModule
  ],
  providers: [GetTwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
