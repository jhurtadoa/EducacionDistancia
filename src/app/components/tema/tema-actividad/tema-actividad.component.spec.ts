import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaActividadComponent } from './tema-actividad.component';

describe('TemaActividadComponent', () => {
  let component: TemaActividadComponent;
  let fixture: ComponentFixture<TemaActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
