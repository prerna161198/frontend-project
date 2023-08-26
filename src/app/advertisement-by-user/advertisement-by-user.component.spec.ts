import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementByUserComponent } from './advertisement-by-user.component';

describe('AdvertisementByUserComponent', () => {
  let component: AdvertisementByUserComponent;
  let fixture: ComponentFixture<AdvertisementByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementByUserComponent]
    });
    fixture = TestBed.createComponent(AdvertisementByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
