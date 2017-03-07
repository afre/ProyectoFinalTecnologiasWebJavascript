import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
@Component({
  selector: 'app-celula',
  templateUrl: './celula.component.html',
  styleUrls: ['./celula.component.css']
})
export class CelulaComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURlService  ) {

  }

  ngOnInit() {
   



}
