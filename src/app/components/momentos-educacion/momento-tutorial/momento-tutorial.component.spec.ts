import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoTutorialComponent } from './momento-tutorial.component';

describe('MomentoTutorialComponent', () => {
  let component: MomentoTutorialComponent;
  let fixture: ComponentFixture<MomentoTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentoTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentoTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
