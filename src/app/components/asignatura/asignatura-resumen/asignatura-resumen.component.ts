import { Component, OnInit, Input } from '@angular/core';
import {Asignatura} from './../asignatura';


@Component({
  selector: 'app-asignatura-resumen',
  templateUrl: './asignatura-resumen.component.html',
  styleUrls: ['./asignatura-resumen.component.css']
})
export class AsignaturaResumenComponent implements OnInit {
  @Input() asignaturaId:number;
  @Input() asignatura:string;
  @Input() numeroTareasPendientes:number;
  @Input() numeroNotificaciones:number;
  
  constructor() { 
      
  }

  ngOnInit() {
      
  }

}
