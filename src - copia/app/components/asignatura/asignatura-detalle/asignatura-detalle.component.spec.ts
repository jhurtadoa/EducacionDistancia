import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetalleComponent } from './asignatura-detalle.component';

describe('AsignaturaDetalleComponent', () => {
  let component: AsignaturaDetalleComponent;
  let fixture: ComponentFixture<AsignaturaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
