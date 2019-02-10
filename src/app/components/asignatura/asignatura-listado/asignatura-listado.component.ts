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

  }

}
