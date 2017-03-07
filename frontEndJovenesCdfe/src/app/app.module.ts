import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CelulaComponent } from './celula/celula.component';
import { SirveEnComponent } from './sirve-en/sirve-en.component';
import { ReunionDeJovenesComponent } from './reunion-de-jovenes/reunion-de-jovenes.component';
import { AudioPodcastComponent } from './audio-podcast/audio-podcast.component';
import { CreyenteComponent } from './creyente/creyente.component';
import { MinisterioComponent } from './ministerio/ministerio.component';
import { FotoReunionComponent } from './foto-reunion/foto-reunion.component';
import { InicioComponent } from './inicio/inicio.component';
import {routing} from "./app.routes";
import {PredicaTextoComponent} from "./predica-en-texto/predica-en-texto.component";

@NgModule({
  declarations: [
    AppComponent,
    CelulaComponent,
    SirveEnComponent,
    ReunionDeJovenesComponent,
    AudioPodcastComponent,
    CreyenteComponent,
    MinisterioComponent,
    FotoReunionComponent,
    PredicaTextoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
