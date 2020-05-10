import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtwebsComponent } from './govtwebs.component';

describe('GovtwebsComponent', () => {
  let component: GovtwebsComponent;
  let fixture: ComponentFixture<GovtwebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtwebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtwebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
