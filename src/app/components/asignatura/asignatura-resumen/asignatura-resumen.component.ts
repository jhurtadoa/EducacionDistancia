import { Component, OnInit, Input } from '@angular/core';
import { MoodleService } from '../../../services/moodle.service';



@Component({
  selector: 'app-asignatura-resumen',
  templateUrl: './asignatura-resumen.component.html',
  styleUrls: ['./asignatura-resumen.component.css']
})
export class AsignaturaResumenComponent implements OnInit {
  @Input() asignaturaId:string;
  @Input() asignatura:string;
  @Input() numeroTareasPendientes:number;
  @Input() numeroNotificaciones:number;
  
  constructor(private moodleService:MoodleService) { 
      
  }

  ngOnInit() {
      this.moodleService.getCoursesList(this.asignaturaId).subscribe( (res:any) => {
        this.asignatura = res[0];
      });
  }

}
