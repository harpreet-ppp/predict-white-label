import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListWrapperComponent } from './business-list-wrapper.component';

describe('BusinessListWrapperComponent', () => {
  let component: BusinessListWrapperComponent;
  let fixture: ComponentFixture<BusinessListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessListWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
