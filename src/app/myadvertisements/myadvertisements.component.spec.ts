import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadvertisementsComponent } from './myadvertisements.component';

describe('MyadvertisementsComponent', () => {
  let component: MyadvertisementsComponent;
  let fixture: ComponentFixture<MyadvertisementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyadvertisementsComponent]
    });
    fixture = TestBed.createComponent(MyadvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
