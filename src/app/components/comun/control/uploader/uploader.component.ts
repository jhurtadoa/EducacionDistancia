import { Component, OnInit, Input } from '@angular/core';
import { UploaderService } from '../../../../services/uploader.service';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  @Input() prefijo:string;
  resource: File;
  
  constructor(private uploaderServices: UploaderService) { }
  
  ngOnInit() {
    
  }

  selectResource(resource:File){
    if(!resource){
      this.resource = null;
      return;
    }
    
    this.resource = resource;
  }

  uploadResource(){
    this.uploaderServices.subirArchivo(this.resource, this.prefijo);
  }
}
