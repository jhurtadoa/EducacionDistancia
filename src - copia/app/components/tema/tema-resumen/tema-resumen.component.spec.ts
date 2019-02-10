import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaResumenComponent } from './tema-resumen.component';

describe('TemaResumenComponent', () => {
  let component: TemaResumenComponent;
  let fixture: ComponentFixture<TemaResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
