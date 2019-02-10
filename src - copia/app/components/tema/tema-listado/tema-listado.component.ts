import { Component, Input, OnInit } from '@angular/core';
import { MoodleService } from '../../../services/moodle.service'
import { ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-tema-listado',
  templateUrl: './tema-listado.component.html',
  styleUrls: ['./tema-listado.component.css']
})
export class TemaListadoComponent implements OnInit{
  @Input() in_course: any;
  course:any;
  topics:any[] = [];
  isloaded:boolean = false;

  ngOnInit(){
    debugger;
    this.course = this.in_course;

    this.isloaded = false;
    if(this.course.id)
    this.moodleService.getContentCourse(this.course.id)
      .subscribe((topics:any) => {
        
        debugger;
        let word = "";
        word = word.toLowerCase();
        if(word != "")
          for(let topic of topics){
            debugger;
            let search:string = topic.displayname.toLowerCase();
            
            if( search.indexOf( word ) >= 0 ){
              topics.push( topic );
            }
          }
    
        this.topics = topics;
        this.isloaded = true;
      }); 

  }

  constructor(private route:ActivatedRoute, private moodleService: MoodleService) {
  }
  
  LoadTopicsList(word:string = ""){
    debugger;
    
    this.isloaded = false;
    if(this.course.id)
    this.moodleService.getContentCourse(this.course.id)
      .subscribe((topics:any[]) => {
        
        debugger;
        
        word = word.toLowerCase();
        let topics_aux:any[] = [];
        if(word != ""){
          for(let topic of topics){
            debugger;
            let search:string = topic.name.toLowerCase();
            
            if( search.indexOf( word ) >= 0 ){
              topics_aux.push( topic );
            }
          }
          this.topics = topics_aux;
        }else{
          this.topics = topics;
        }
          
        
        this.isloaded = true;
      }); 
  }


  buscar(word:string){
    this.LoadTopicsList(word);

  }

}
