import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_NODESERVER } from '../config/config'
@Injectable()
export class UploaderService {
  private URL_BASE:string= URL_NODESERVER+'/upload/';
  constructor(private http: HttpClient) { }

  public saveFile(prefijo:string, file:any){
    let urlRequest = URL_NODESERVER + this.URL_BASE + prefijo;
    return this.http.post(urlRequest, file);
  }


  public subirArchivo(archivo:File, prefijo:string){

    return new Promise( (resolve, reject) =>{

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append('resource', archivo, archivo.name);

      xhr.onreadystatechange = (params:any) => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            console.log('Imagen subida');
            resolve(xhr.response);

          }else
          {
            console.log('Algo falló en la subida');
            reject(xhr.response);
          }
        }
      }

      let url = this.URL_BASE + prefijo;

      xhr.open('POST', url, true);
      xhr.send( formData );

    });
    
  }
}
