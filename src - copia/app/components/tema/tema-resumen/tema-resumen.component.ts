import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-resumen',
  templateUrl: './tema-resumen.component.html',
  styleUrls: ['./tema-resumen.component.css']
})
export class TemaResumenComponent implements OnInit {
  
  @Input() topic:any;
  
  constructor() { }

  ngOnInit(): void {
    
  }



}
