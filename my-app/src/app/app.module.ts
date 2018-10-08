import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';

import { HttpClientModule } from '@angular/common/http';
import { TracksComponent } from './components/tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
