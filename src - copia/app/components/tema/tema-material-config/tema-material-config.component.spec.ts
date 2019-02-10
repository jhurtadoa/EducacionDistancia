import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaMaterialConfigComponent } from './tema-material-config.component';

describe('TemaMaterialConfigComponent', () => {
  let component: TemaMaterialConfigComponent;
  let fixture: ComponentFixture<TemaMaterialConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaMaterialConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaMaterialConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
