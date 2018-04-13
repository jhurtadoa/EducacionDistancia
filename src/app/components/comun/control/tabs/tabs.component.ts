import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() Opciones:String[];
  constructor() { }

  //Opciones:String[] = ["Mis Archivos", "Inquietudes", "Apuntes", "Destacados"]

  ngOnInit() {
  }

}
