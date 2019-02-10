import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annotation } from '../models/Annotation';
import { URL_NODESERVER } from '../config/config';

@Injectable()
export class AnnotationsService implements OnInit{
  
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
  }

  public getAnnotations(iduser:string, idcourse:string, idtopic:string){
    let urlSaveAnnotation:string = `/annotation/${iduser}/${idcourse}/${idtopic}`; 
    let urlRequest = URL_NODESERVER + urlSaveAnnotation;
    return this.http.get(urlRequest);
  }

  public saveAnnotations(annotation:Annotation){
    let urlSaveAnnotation:string = "/annotation"; 
    let urlRequest = URL_NODESERVER + urlSaveAnnotation;
    return this.http.post(urlRequest, annotation);
  }

  public updateAnnotations(annotation:Annotation){
    let urlUpdateAnnotation:string = "/annotation"; 
    let urlRequest = URL_NODESERVER + urlUpdateAnnotation;
    return this.http.put(urlRequest, annotation);
  }

  public deleteAnnotations(idannotation:string){
    let urlDeleteAnnotation:string = "/annotation/"+ idannotation; 
    let urlRequest = URL_NODESERVER + urlDeleteAnnotation;
    return this.http.delete(urlRequest);
  }

}
