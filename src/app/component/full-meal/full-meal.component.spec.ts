import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMealComponent } from './full-meal.component';

describe('FullMealComponent', () => {
  let component: FullMealComponent;
  let fixture: ComponentFixture<FullMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
