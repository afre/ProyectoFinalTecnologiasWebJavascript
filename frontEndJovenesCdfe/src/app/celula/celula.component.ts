import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {NgForm} from "@angular/forms";
import {MasterUrlService} from "../services/master-url.service";
@Component({
  selector: 'app-celula',
  templateUrl: './celula.component.html',
  styleUrls: ['./celula.component.css']
})
export class CelulaComponent implements OnInit {

  constructor(/*private _ActivatedRoute:ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterUrlService  */) {

  }

  ngOnInit() {
/*
    crearCelula(formulario: NgForm){
      let Celula = {
        sector_Celula:formulario.value.sector_Celula,
        edad_Minima:formulario.value.edad_Minima,
        edad_Maxima:formulario.value.edad_Maxima,
        id_Lider:formulario.value.id_Lider
      }

      this._http.post(this._masterURL.url+'Producto',producto)
        .subscribe(
          (res:Response)=>{
            this.productos.push(res.json());
          },
          (err)=>{
            console.log("Error:",err);
          }
        )*/
    }




}
