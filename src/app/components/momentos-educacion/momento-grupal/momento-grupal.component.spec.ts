import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoGrupalComponent } from './momento-grupal.component';

describe('MomentoGrupalComponent', () => {
  let component: MomentoGrupalComponent;
  let fixture: ComponentFixture<MomentoGrupalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentoGrupalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentoGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
