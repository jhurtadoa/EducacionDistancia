import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoIndividualComponent } from './momento-individual.component';

describe('MomentoIndividualComponent', () => {
  let component: MomentoIndividualComponent;
  let fixture: ComponentFixture<MomentoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
