import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementByLocationComponent } from './advertisement-by-location.component';

describe('AdvertisementByLocationComponent', () => {
  let component: AdvertisementByLocationComponent;
  let fixture: ComponentFixture<AdvertisementByLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementByLocationComponent]
    });
    fixture = TestBed.createComponent(AdvertisementByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
