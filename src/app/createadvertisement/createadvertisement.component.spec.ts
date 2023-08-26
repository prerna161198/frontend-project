import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadvertisementComponent } from './createadvertisement.component';

describe('CreateadvertisementComponent', () => {
  let component: CreateadvertisementComponent;
  let fixture: ComponentFixture<CreateadvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateadvertisementComponent]
    });
    fixture = TestBed.createComponent(CreateadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
