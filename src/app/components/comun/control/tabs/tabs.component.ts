import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
  @Input() Opciones:String[]
  
  constructor() {}
  
  contenidos:string[] = [];  
  // Opciones:String[] = ["Mis Archivos", "Inquietudes", "Apuntes", "Destacados"]

  ngOnInit() {
  }
  
  funcion(tab:string){
    
    this.contenidos = [];    
    this.contenidos.push(`Data del servicio. param ` + tab );
    
  } 

}