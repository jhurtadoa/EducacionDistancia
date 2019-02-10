import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { MoodleService } from '../../../services/moodle.service';
import { TemaListadoComponent } from "../../tema/tema-listado/tema-listado.component";

@Component({
  selector: 'app-asignatura-detalle',
  templateUrl: './asignatura-detalle.component.html',
  styleUrls: ['./asignatura-detalle.component.css']
})
export class AsignaturaDetalleComponent {

  course:any;
  idcourse:string;
  isloaded_detalle:boolean = false;
  constructor(private activatedRoute: ActivatedRoute, 
              private moodle: MoodleService
  ) {
    this.activatedRoute.params.subscribe( (params:Params) =>{
      this.isloaded_detalle = false;
      this.idcourse = params["idcourse"];
      debugger;
      //Get course from moodle service
      moodle.getCoursesList(this.idcourse)
        .subscribe( (data:any)=>{
          debugger;
          this.course = data[0];
          this.isloaded_detalle = true;
        });


    });

  }
  

  

}
