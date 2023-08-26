import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadvertisementComponent } from './updateadvertisement.component';

describe('UpdateadvertisementComponent', () => {
  let component: UpdateadvertisementComponent;
  let fixture: ComponentFixture<UpdateadvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateadvertisementComponent]
    });
    fixture = TestBed.createComponent(UpdateadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
