import { Component, OnInit } from '@angular/core';
import { AsignaturaResumenComponent } from '../asignatura-resumen/asignatura-resumen.component';

//Services
import { MoodleService } from "../../../services/moodle.service";


@Component({
  selector: 'app-asignatura-listado',
  templateUrl: './asignatura-listado.component.html',
  styleUrls: ['./asignatura-listado.component.css']
})
export class AsignaturaListadoComponent {

<<<<<<< HEAD
  
  courses:any[] = [];
  isloaded:boolean = false;
  constructor(private moodleService: MoodleService) {
    this.LoadCoursesList("");
   }
  
  LoadCoursesList(word:string){
    debugger;
    this.moodleService.getUserCoursesList(parseInt(sessionStorage.getItem('userid')))
      .subscribe((courses:any) => {
        debugger;
        word = word.toLowerCase();
        let courses_aux :any[] = [];
        if(word != ""){
          for(let course of courses){
            let search:string = course.fullname.toLowerCase();
            
            if( search.indexOf( word ) >= 0 ){
              courses_aux.push( course );
            }
          }
          this.courses = courses_aux;
        }else{
          this.courses = courses;
        }
        this.isloaded = true;
      });
  }


  buscar(word:string){
    this.LoadCoursesList(word);

=======
  constructor() {}
   listado_asignaturas: any[] = [
    { "id": "1",
      "nombre": "Calculo diferencial",
      "resumen": {
                "tareas_pendientes":3,
                "notificaciones": 5
      }
    },

    { "id": "2",
      "nombre": "Programación basica",
      "resumen": {
                "tareas_pendientes":2,
                "notificaciones": 4
      }
    },

    { "id": "3",
      "nombre": "Fisica I",
      "resumen": {
                "tareas_pendientes":2,
                "notificaciones": 3
      }
    },

    { "id": "4",
      "nombre": "Quimica basica",
      "resumen": {
                "tareas_pendientes":1,
                "notificaciones": 3
      }
    },

    { "id": "5",
      "nombre": "Comunicación I",
      "resumen": {
                "tareas_pendientes":0,
                "notificaciones": 1
      }
    }
  ]
  asignaturas: any[] = this.listado_asignaturas;

  ngOnInit() {
  }

  buscar(termino: string) {
    let resultadoaArr: any[] = []
    termino = termino.toLowerCase();
    for (let asignatura of this.listado_asignaturas) {
      let search: string = asignatura.nombre.toLowerCase();
      if (search.indexOf( termino ) >= 0 ) {
        resultadoaArr.push( asignatura );
      }
    }
    this.asignaturas = resultadoaArr;
>>>>>>> 0a99c9a2e5e89f2b76f8fdd6154e0fa367b45ad2
  }
}
