import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoodleService } from '../../../services/moodle.service';
import {filter} from 'rxjs/operators';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-momento-individual',
  templateUrl: './momento-individual.component.html',
  styleUrls: ['./momento-individual.component.css']
})
export class MomentoIndividualComponent implements OnInit {
  
  idcourse:string;
  course:any;
  topicSelected:any = {};
  topics: any[] = [];
  constructor(private activatedRoute:ActivatedRoute,
              private moodleService: MoodleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params:any) =>{
      this.idcourse = params.idcourse;
      this.moodleService.getCoursesList(this.idcourse).subscribe( (res:any) =>{
        console.log(res,'find course');
        this.course = res[0];

      });

      this.moodleService.getContentCourse(this.idcourse)
      .subscribe( (res: any) => {
          this.topics = res;
          this.topicSelected = res.find(x => x.id == params.idtopic);
      })
    });
    
  }

}
