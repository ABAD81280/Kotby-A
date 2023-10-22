import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmenComponent } from './admen.component';

describe('AdmenComponent', () => {
  let component: AdmenComponent;
  let fixture: ComponentFixture<AdmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmenComponent]
    });
    fixture = TestBed.createComponent(AdmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
