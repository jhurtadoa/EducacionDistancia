import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaMaterialComponent } from './tema-material.component';

describe('TemaMaterialComponent', () => {
  let component: TemaMaterialComponent;
  let fixture: ComponentFixture<TemaMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
