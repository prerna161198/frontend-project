import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementByIdComponent } from './advertisement-by-id.component';

describe('AdvertisementByIdComponent', () => {
  let component: AdvertisementByIdComponent;
  let fixture: ComponentFixture<AdvertisementByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementByIdComponent]
    });
    fixture = TestBed.createComponent(AdvertisementByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
