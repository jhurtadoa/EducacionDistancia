import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaListadoComponent } from './asignatura-listado.component';

describe('AsignaturaListadoComponent', () => {
  let component: AsignaturaListadoComponent;
  let fixture: ComponentFixture<AsignaturaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
