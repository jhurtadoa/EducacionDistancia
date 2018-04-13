import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaActividadConfigComponent } from './tema-actividad-config.component';

describe('TemaActividadConfigComponent', () => {
  let component: TemaActividadConfigComponent;
  let fixture: ComponentFixture<TemaActividadConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaActividadConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaActividadConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
