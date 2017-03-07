import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {InicioComponent} from "./inicio/inicio.component";
import {MinisterioComponent} from "./ministerio/ministerio.component";
import {CreyenteComponent} from "./creyente/creyente.component";
import {ReunionDeJovenesComponent} from "./reunion-de-jovenes/reunion-de-jovenes.component";
import {FotoReunionComponent} from "./foto-reunion/foto-reunion.component";
import {AudioPodcastComponent} from "./audio-podcast/audio-podcast.component";
import {CelulaComponent} from "./celula/celula.component";
import {SirveEnComponent} from "./sirve-en/sirve-en.component";
import {PredicaTextoComponent} from "./predica-en-texto/predica-en-texto.component";

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'ministerios', component: MinisterioComponent},
  {path: 'creyente', component: CreyenteComponent},
  {path: 'reunionDeJovenes', component: ReunionDeJovenesComponent},
  {path: 'reunionDeJovenes/:idReunionJovenes/fotoReunion', component: FotoReunionComponent},
  {path: 'reunionDeJovenes/:idReunionJovenes/audioPodcast', component: AudioPodcastComponent},
  {path: 'reunionDeJovenes/:idReunionJovenes/predicaTexto', component: PredicaTextoComponent},
  {path: 'creyente/:idCreyente/celula', component: CelulaComponent},
  {path: 'creyente/:idCreyente/sirveEn', component: SirveEnComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
