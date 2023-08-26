import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementByCategoryComponent } from './advertisement-by-category.component';

describe('AdvertisementByCategoryComponent', () => {
  let component: AdvertisementByCategoryComponent;
  let fixture: ComponentFixture<AdvertisementByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementByCategoryComponent]
    });
    fixture = TestBed.createComponent(AdvertisementByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
