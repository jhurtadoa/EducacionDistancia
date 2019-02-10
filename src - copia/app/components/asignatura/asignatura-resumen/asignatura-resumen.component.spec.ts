import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaResumenComponent } from './asignatura-resumen.component';

describe('AsignaturaResumenComponent', () => {
  let component: AsignaturaResumenComponent;
  let fixture: ComponentFixture<AsignaturaResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
