import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityhighComponent } from './cityhigh.component';

describe('CityhighComponent', () => {
  let component: CityhighComponent;
  let fixture: ComponentFixture<CityhighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityhighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityhighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
