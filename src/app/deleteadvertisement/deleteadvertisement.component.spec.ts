import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteadvertisementComponent } from './deleteadvertisement.component';

describe('DeleteadvertisementComponent', () => {
  let component: DeleteadvertisementComponent;
  let fixture: ComponentFixture<DeleteadvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteadvertisementComponent]
    });
    fixture = TestBed.createComponent(DeleteadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
