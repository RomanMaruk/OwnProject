import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFilteredByCategoryComponent } from './meal-filtered-by-category.component';

describe('MealFilteredByCategoryComponent', () => {
  let component: MealFilteredByCategoryComponent;
  let fixture: ComponentFixture<MealFilteredByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealFilteredByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealFilteredByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
