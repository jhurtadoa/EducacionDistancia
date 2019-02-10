import { Component, OnInit, Input } from '@angular/core';
import { AnnotationsService } from '../../../../services/annotations.service';
import { Annotation } from '../../../../models/Annotation'
import { indexDebugNode } from '../../../../../../node_modules/@angular/core/src/debug/debug_node';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() type: string;
  @Input() context: string;
  private iduser:string;
  private idcourse:string;
  private idtopic:string;
  annotations: Annotation[] = [];
  newAnnotation:Annotation = new Annotation();
  newAnswerPost:any = {};
  constructor(private activedRoute: ActivatedRoute , private annotationService: AnnotationsService) { }

  ngOnInit() {
    this.getAnnotations();
  }

  public getAnnotations(){
    console.log(this.iduser +'/'+ this.idcourse +'/'+ this.idtopic,'blog 1')
    this.activedRoute.params.subscribe(params => {
      
      this.iduser = sessionStorage.getItem('userid');
      this.idcourse = params.idcourse;
      this.idtopic = params.idtopic;
      console.log(this.iduser +'/'+ this.idcourse +'/'+ this.idtopic,'blog 2')
      this.annotationService.getAnnotations(this.iduser, this.idcourse, this.idtopic)
      .subscribe( (res:any) =>{
        console.log(res.annotations, 'getAnnotations - Blog');
        this.annotations = res.annotations;

      });
    });
    
  }

  public createAnnotation(){
    
    this.newAnnotation.iduser   = this.iduser;
    this.newAnnotation.idcourse = this.idcourse;
    this.newAnnotation.idtopic  = this.idtopic;
    this.newAnnotation.type     = this.type;
    this.newAnnotation.context  = this.context;
    console.log(this.newAnnotation);
    this.annotationService.saveAnnotations(this.newAnnotation).subscribe( (res:any) =>{
      console.log(res);
      if(res.annotation){
        this.annotations.push(res.annotation);
        console.log("anotación creada correctamente");
        this.newAnnotation.description = "";
      }else{
        console.log("No se pudo crear la anotación");
      }
      
    });
    
  }

  public deleteAnnotation(idannotation:string){
    this.annotationService.deleteAnnotations(idannotation).subscribe( (res:any)=> {
      if(res.annotation){
        console.log("anotación eliminada correctamente");
        this.getAnnotations();
      }else{
        console.log("No se pudo crear la anotación");
      }
    });
  }

  public updateAnswerAnnotation(annotation:Annotation){
    console.log(annotation);
    this.newAnswerPost.iduser = this.iduser;
    this.newAnswerPost.datetimecreate = Date.now;
    annotation.answers.push({ iduser: this.newAnswerPost.iduser, 
                              description: this.newAnswerPost.description,
                              datetimecreated: Date.now() });    
    
    this.annotationService.updateAnnotations(annotation).subscribe( (res:any) =>{
      if(res.annotation){
        console.log("Respuesta añadida correctamente");
        
        //this.getAnnotations();
        this.newAnswerPost.description ="";
      }else{
        console.log("No se pudo añadir respuesta a la anotación");
      }
      
    });
    
  }

}
