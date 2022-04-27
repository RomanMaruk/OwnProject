import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MealDBService } from './meal-db.service';
import { Observable, of, Subject } from 'rxjs';
import { MealCategoriesModel } from 'src/app/model/meal/meal.interface';

fdescribe('MealDBService', () => {
  let service: MealDBService;
  let httpMock: any;
  // let response = new Subject();
  let httpCall: HttpClient;
  let response: MealCategoriesModel;

  beforeEach(() => {
    httpMock = {
      get: jasmine.createSpy('get'),
      data: jasmine.createSpy('response')
      // .withArgs(url)
      .and.returnValue(of({}))
    };
    service = new MealDBService(httpMock)
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllMealCategories', () => {
    it('should be called http whith appropriate params', () => {
      const url = 'https://themealdb.com/api/json/v1/1/categories.php'
      service.getAllMealCategories()

      expect(httpMock.get).toHaveBeenCalledWith(url)
    })
  })
  it('should return Observable as response', () => {
    const mealResponse = {
      categories: [
        {
          idCategory: 2,
          strCategory: 'Meat',
          strCategoryThumb: 'www.mear.svg',
          strCategoryDescription: 'lorem'
        },
        {
          idCategory: 22,
          strCategory: 'Kitcheb',
          strCategoryThumb: 'www.Kitchen.svg',
          strCategoryDescription: 'lorem'
        }
      ]}
    
    spyOn(service, 'getAllMealCategories').and.returnValue(of(mealResponse))

    service.getAllMealCategories().subscribe(res => response = res)
    expect(response).toEqual(mealResponse)
  })
});
